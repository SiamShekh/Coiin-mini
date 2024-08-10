import { useDispatch, useSelector } from "react-redux";
import { AppRoot } from "../../redux/store/ReduxStore";
import { isModalsClicked } from "../../redux/slice/ReduxSettingSlice";
import { useState } from "react";

const VaildateModals = () => {
    const Selector = useSelector((state: AppRoot) => state.Setting.isVaildatorClickedModals);
    const DisPatch = useDispatch();
    const [vaildate, setVaildate] = useState(false);

    // TODO: Add logic to check if the user is currently enabled for validation.
    // Based on the result, update the UI or visual state accordingly.
    // Consider using Redux to fetch and store user information.

    return (
        <div>
            {
                Selector &&
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle " open>
                    <div className="modal-box bg-[#302C2C]">
                        <h3 className="font-bold text-2xl text-white">Become a vaildators</h3>
                        {
                            vaildate ?
                                <div>
                                    <p className="text-white text-opacity-70">{"You are currently a Rainmaker validator. To leave the Rainmaker validator program, click 'Un-validate'."}</p>
                                    <div className="w-40 h-40 relative rounded-full  CircleAnimDisable mx-auto mt-5" onClick={() => setVaildate(!vaildate)}>
                                        <p className="text-xl absolute bottom-[50%] left-[5%] font-mono text-white " >De-Vaildate</p>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="text-white text-opacity-70">You are currently not a validator. To become a validator, click 'validate' to register your validation.</p>
                                    {/* IF ENABLE THEN 'CircleAnimEnable' AND IF DISABLE 'CircleAnimDisable' */}
                                    <div className="w-40 h-40 relative rounded-full  CircleAnimEnable mx-auto mt-5" onClick={() => setVaildate(!vaildate)}>
                                        <p className="text-xl absolute top-[50%] right-[5%] font-mono text-white ">Vaildate</p>
                                    </div>
                                </div>
                        }



                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={() => DisPatch(isModalsClicked(undefined))}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }
        </div>
    );
};

export default VaildateModals;