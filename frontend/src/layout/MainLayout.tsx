import * as ResizablePrimitive from "react-resizable-panels";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";

const MainLayout = () => {
    const isMobile=false;
    return (
        <div className="h-screen bg-black text-white">
            <ResizablePrimitive.Group orientation="horizontal" className="h-full">
            <ResizablePrimitive.Panel id="left" defaultSize={15} >
            <LeftSidebar/>
            </ResizablePrimitive.Panel>

            <ResizablePrimitive.Separator />

            <ResizablePrimitive.Panel id="center" defaultSize={isMobile? 80:60} >
            <Outlet />
            </ResizablePrimitive.Panel>
            </ResizablePrimitive.Group>
        </div>
    );
};

export default MainLayout;