/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useLazyAiGenarateImageQuery } from "../redux/api/GenarateImageEndpoints";
import AiImagePreviewItem from "../components/ui/AiImagePreviewItem";

const ImageGenaretors = () => {
    const [isPromt, setPromt] = useState("");
    const [skip, setSkip] = useState(4);
    const [triger, { data, isFetching }] = useLazyAiGenarateImageQuery();
    
    const { register, handleSubmit } = useForm();

    const HandleImageGenarate = async (data: any) => {
        if (isPromt == data?.promt) {
            setSkip(Number(skip) + 4);
        } else {
            triger(data?.promt || "The cat drinking");
            setPromt(data?.promt);
        }
    };

    return (
        <div className="min-h-screen px-5 w-full">
            <form onSubmit={handleSubmit(HandleImageGenarate)} className="w-full image_genarate_textarea flex justify-center items-center flex-col gap-4">
                {
                    isFetching ? <>
                        <p className="bg-gradient-to-r  from-[#e600ff] to-[#562cff] bg-clip-text text-transparent font-bold">Loading</p>
                    </> :
                        <>
                            <textarea placeholder="write the promt" className="w-full min-h-28 image_genarate_textarea outline-none bg-black text-white" {...register('promt')} />
                            {/* <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Select Size*</span>
                                </div>
                                <select {...register('size')} defaultValue={"Unordered"} className="select select-bordered bg-black text-white">
                                    <option disabled defaultValue={"Unordered"}>Unordered</option>
                                    <option>Horizontal</option>
                                    <option>Vertical</option>
                                    <option>Square</option>
                                    <option>Panoramic</option>
                                </select>
                            </label> */}
                            <button type="submit" className="get_started_boxed mx-auto text-white">{"Generate"}</button>
                        </>
                }
            </form>

            <div className="mt-5">
                {
                    data?.slice(skip - 4, skip)?.map((items: object, index: number) => <AiImagePreviewItem items={items} key={index} />)
                }
            </div>
        </div>
    );
};

export default ImageGenaretors;