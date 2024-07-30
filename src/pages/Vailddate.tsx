import { useDispatch } from "react-redux";
import img from "../assets/image/raiinmaker_blockchain_map.webp";
import "../components/styles/BorderAnim.css"
import { isModalsClicked } from "../redux/slice/ReduxSettingSlice";
const VaildDate = () => {
    const DisPatch = useDispatch();
    return (
        <div className="relative max-h-screen">

            <div className="p-3 vaildator_details_boxed">
                <img src={img} className="w-full rounded-t-3xl object-cover h-[40vh]" />
                <div className="w-full bg-slate-500 backdrop-blur-md relative  bg-opacity-20 rounded-b-3xl p-3">

                    <p className="text-white text-2xl font-bold opacity-65 tracking-wider">Become a vaildator</p>
                    <p className="text-white opacity-50">Validate transactions even without Blockchain knowledge.</p>
                    <div className="flex mt-4 justify-between items-center gap-4 w-full">

                        <div className="rounded-lg text-xl p-[2px] mx-auto get_started_boxed">
                            <p onClick={() => DisPatch(isModalsClicked(undefined))} className="bg-gradient-to-r  from-[#e600ff] to-[#562cff] bg-clip-text text-transparent font-bold">Get Started</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VaildDate;