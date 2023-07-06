// create auth context and wrapper
import React, { useState, useEffect, createContext, useReducer } from "react";

// import { auth } from "../../firebase";
import { auth } from "../../services/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import ls from "../../config/localStore";

// create context
export const AuthContext = createContext<any>(null);

// create provider
export const AuthProvider = ({ children }: any) => {
  // create initial state
  const initialState = {
    currentUser: null,
    // tokenManger: null,
    loading: true,
    error: null,
    isAuthenticated: false,
    isError: false,
  };

  // create reducer
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "LOGIN":
        ls.set("user", action.payload.user);
        // ls.set("tokenManager", action.payload.tokenManager);
        return {
          ...state,
          currentUser: action.payload.user,
          // tokenManager: action.payload.tokenManager,
          isAuthenticated: true,
          isError: false,
          loading: false,
        };
      case "LOGOUT":
        ls.remove("user");
        ls.remove("tokenManager");
        return {
          ...state,
          currentUser: null,
          // tokenManager: null,
          isAuthenticated: false,
          isError: false,
          loading: false,
        };
      case "REFRESH":
        ls.set("user", action.payload.user);
        // ls.set("tokenManager", action.payload.tokenManager);
        return {
          ...state,
          currentUser: action.payload.token,
          // tokenManager: action.payload.tokenManager,
          isAuthenticated: true,
          isError: false,
          loading: false,
        };
      case "ERROR":
        return {
          ...state,
          error: action.payload.error,
          isError: true,
          loading: false,
        };
      default:
        return state;
    }
  };

  // create state
  const [authState, authDispatch] = useReducer(reducer, initialState);

  // Create signin with email, google, and github functions
  function signinWithEmail(email: string, password: string)  {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user.toJSON();
        //get access token, expiration time, and refresh token
        // const tokenManager = user["stsTokenManager" as keyof typeof user];
        if (user) {

          authDispatch({
            type: "LOGIN",
            payload: { user: user },
          });
        } else {
          authDispatch({
            type: "ERROR",
            payload: { error: "User not found" },
          });
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        authDispatch({
          type: "ERROR",
          payload: { error: errorMessage },
        });
      });
  }

  function signinWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        const user = result.user;
        authDispatch({
          type: "LOGIN",
          payload: { user: user },
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        authDispatch({
          type: "ERROR",
          payload: { error: errorMessage },
        });
        // ...
      });
  }

  // Create signout function
  function signout() {
    authDispatch({
      type: "LOGOUT",
    });
  }

  // Create value for provider
  const value = {
    authState,
    signinWithEmail,
    signinWithGoogle,
    signout,
  };

  // Create useEffect to check for user on mount
  useEffect(() => {
    const user = ls.get("user");
    const token = ls.get("token");
    if (user && token) {
      authDispatch({
        type: "REFRESH",
        payload: { user: user, token: token },
      });
    }
  }, []);

  // return provider
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => React.useContext(AuthContext);