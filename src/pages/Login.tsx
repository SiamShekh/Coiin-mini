/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slice/ReduxAuthenticationSlice";
import { AppRoot } from "../redux/store/ReduxStore";
import { useEffect } from "react";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state: AppRoot) => state.persistedReducer);
    useEffect(() => {
        if (user.email) {
            navigate('/dashboard/vaildate', { replace: true });
        }
    }, [])

    const HandleLogin = async (payload: any) => {
        await dispatch(loginUser(payload));
        navigate('/dashboard/vaildate', { replace: true });
        //Todo: Please implement the login fetch logic here and store a token or instance in Redux for automatic login. I've already implemented the logic to restrict access to validate, image generation, and other pages to logged-in users only.
    };

    return (
        <div className="overflow-hidden h-screen relative">
            <div className="absolute z-0 h-screen bg-black w-screen">
                <div className="w-screen h-screen bg-gradient-to-b from-transparent to-blue-500 rounded-full scale-105 bottom-0 absolute blur-3xl skew-x-12" />
            </div>

            <form className="absolute z-10 p-5 w-full bottom-0 " onSubmit={handleSubmit(HandleLogin)}>
                <div className="bg-white w-full text-black p-5 opacity-70 rounded-xl">
                    <label className="border rounded-lg mb-5 px-2 py-3 border-black flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" {...register('email')} className="grow bg-transparent text-black outline-none" placeholder="Email" />
                    </label>

                    <label className="border rounded-lg mb-5 px-2 py-3 border-black flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow bg-transparent text-black outline-none" placeholder="Password" {...register('password')} />
                    </label>

                    <button className="bg-black text-white w-full p-2 rounded-lg bg-opacity-90 hover:bg-opacity-100" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;