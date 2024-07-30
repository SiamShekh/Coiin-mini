import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation";
import Navigation from "../ui/Navigation";
import VaildateModals from "../ui/VaildateModals";

const MainLayout = () => {
    return (
        <div className="relative bg-black">
            <div className="absolute z-20 top-0">
                <Navigation />
            </div>
            <div className="relative z-10 py-[15vh]">
                <Outlet />
            </div>
            <VaildateModals />
            <div className="absolute z-20 bottom-0">
                <BottomNavigation />
            </div>
        </div>
    );
};

export default MainLayout;