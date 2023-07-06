import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../../../components";
import { PrivateRouteWrapperContainer } from "./PrivateRouteWrapper.style";
import { useRef } from "react";

interface PrivateRouteWrapperProps {
    isWriter: boolean;
    // children: React.ReactNode;
}

export function PrivateRouteWrapper(
    { isWriter,
        // children
    }: PrivateRouteWrapperProps
) {
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