import { AiOutlinePlus } from "react-icons/ai"
import { CgMore, CgImage } from "react-icons/cg";
import { NavLink } from "react-router-dom";
const BottomNavigation = () => {
    // const path = us
    return (
        <div className="btm-nav max-h-[13vh] h-16 fixed bg-black">
            <NavLink to={'/dashboard/vaildate'} className={({ isActive }) => isActive ? 'active bg-black text-white text-opacity-100' : 'text-white text-opacity-50'}>
                <button className="flex flex-col justify-center items-center ">
                    <AiOutlinePlus className="text-xl" />
                    <span className="btm-nav-label">Vaildate</span>
                </button>
            </NavLink>

            <NavLink to={'/dashboard/image'} className={({ isActive }) => isActive ? 'active bg-black text-white text-opacity-100' : 'text-white text-opacity-50'}>
                <button className="flex flex-col justify-center items-center ">
                    <CgImage className="text-xl" />
                    <span className="btm-nav-label">Image</span>
                </button>
            </NavLink>
            
            <NavLink to={'/dashboard/more'} className={({ isActive }) => isActive ? 'active bg-black text-white text-opacity-100' : 'text-white text-opacity-50'}>
                <button className="flex flex-col justify-center items-center ">
                    <CgMore className="text-xl" />
                    <span className="btm-nav-label">More</span>
                </button>
            </NavLink>
            
        </div>
    );
};

export default BottomNavigation;