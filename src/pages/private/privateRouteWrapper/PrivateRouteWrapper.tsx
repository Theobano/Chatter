import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar, Topbar } from "../../../components";
import { PrivateRouteWrapperContainer } from "./PrivateRouteWrapper.style";
import { useRef, useEffect } from "react";
import { useAuthContext } from "../../../contexts";


export function PrivateRouteWrapper(

) {
    const { authState } = useAuthContext();
    const navigation = useNavigate()
    useEffect(() => {
        if (!authState.isAuthenticated) {
            navigation("/auth");
        }
    }, [authState.isAuthenticated]);
    const sidebarRef = useRef<HTMLDivElement>(null);
    return (
        <PrivateRouteWrapperContainer>
            <Sidebar sidebarRef={sidebarRef} />
            <main>
                <Topbar sidebarRef={sidebarRef}/>
                <Outlet />
            </main>
        </PrivateRouteWrapperContainer>
    );
}