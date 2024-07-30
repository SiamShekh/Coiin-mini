import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const More = () => {
    return (
        <div className="relative min-h-screen p-5 flex flex-col gap-2">

            <Link target="_blank" to={"https://t.me/raiinmakernetwork"}>
                <div className="w-full h-14 rounded-lg flex justify-between items-center bg-white bg-opacity-40 backdrop-blur-md gap-4 relative px-3 py-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png" className="h-full flex-1" />

                    <div className="flex-[4] flex flex-col justify-center">
                        <p className="text-xl text-white">Telegram</p>
                        <p className="text-sm opacity-40 text-white">Offical Group</p>
                    </div>

                    <BiSolidRightArrow className="text-white text-2xl flex-1" />
                </div>
            </Link>

            <Link target="_blank" to={"https://twitter.com/Raiinmakerapp/" }>
                <div className="w-full h-14 rounded-lg flex justify-between items-center bg-white bg-opacity-40 backdrop-blur-md gap-4 relative px-3 py-2">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png" className="h-full flex-1" />

                    <div className="flex-[4] flex flex-col justify-center">
                        <p className="text-xl text-white">X (Twitter)</p>
                        <p className="text-sm opacity-40 text-white">Offical X</p>
                    </div>

                    <BiSolidRightArrow className="text-white text-2xl flex-1" />
                </div>
            </Link>

            <Link target="_blank" to={"https://raiinmaker.medium.com/"}>
                <div className="w-full h-14 rounded-lg flex justify-between items-center bg-white bg-opacity-40 backdrop-blur-md gap-4 relative px-3 py-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png" className="h-full flex-1" />

                    <div className="flex-[4] flex flex-col justify-center">
                        <p className="text-xl text-white">Medium</p>
                        <p className="text-sm opacity-40 text-white">Offical Medium</p>
                    </div>

                    <BiSolidRightArrow className="text-white text-2xl flex-1" />
                </div>
            </Link>

        </div>
    );
};

export default More;