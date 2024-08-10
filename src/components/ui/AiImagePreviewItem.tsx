import { useState, useEffect } from "react";
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AiImagePreviewItem = ({ items }: any) => {
    const [hover, setHover] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const imgbbApiKey = '3b185f8a7f164fa5acafabcec201a8ef';

    const download = async (url: string) => {
        try {
            setLoading(true);
            const imageURL = `https://freepik-to-image-api.vercel.app/proxy?url=${url}`;

            const response = await fetch(imageURL);
            const blob = await response.blob();
            const formData = new FormData();
            formData.append('image', blob);

            const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
                method: 'POST',
                body: formData
            });

            const imgbbData = await imgbbResponse.json();
            if (imgbbData.success) {
                setUploadedImageUrl(imgbbData.data.url);
            } else {
                console.error('Failed to upload image to ImgBB:', imgbbData);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (hover && !uploadedImageUrl) {
            download(items.preview.url);
        }
    }, [hover, items.preview.url]);

    return (
        <div
            className="image_img_border_area p-1 mb-2 relative group"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={items.preview.url} className="w-full rounded-[12px] relative top-0 z-0 h-40 object-cover" />

            {loading ? (
                <div className="absolute opacity-0 group-hover:opacity-100 flex z-10 top-0 left-0 h-full w-full justify-center items-center flex-col bg-slate-500 backdrop-blur-md bg-opacity-[1%] rounded-[12px] px-2 py-3 transition-opacity duration-300">
                    <p className="text-white text-xl font-bold">Share the content!</p>
                    <div className="flex justify-around items-center gap-3 mt-3">
                        <p className="bg-gradient-to-r from-[#e600ff] to-[#562cff] bg-clip-text text-transparent font-bold">Loading</p>
                    </div>
                </div>
            ) : (
                uploadedImageUrl &&
                <div className="absolute opacity-0 group-hover:opacity-100 flex z-10 top-0 left-0 h-full w-full justify-center items-center flex-col bg-slate-500 backdrop-blur-md bg-opacity-[1%] rounded-[12px] px-2 py-3 transition-opacity duration-300">
                    <p className="text-white text-xl font-bold">Share the content!</p>
                    <div className="flex justify-around items-center gap-3 mt-3">
                        <>
                            <TelegramShareButton className={`${loading ? 'hidden' : 'block'}`} url={`😇 Here is my latest AI-generated image powered by Raiinmaker.\n 🔗 ${uploadedImageUrl}`}>
                                <TelegramIcon className="rounded-full size-10" />
                            </TelegramShareButton>

                            <WhatsappShareButton className={`${loading ? 'hidden' : 'block'}`} url={`😇 Here is my latest AI-generated image powered by Raiinmaker.\n 🔗 ${uploadedImageUrl}`}>
                                <WhatsappIcon className="rounded-full size-10" />
                            </WhatsappShareButton>

                            <TwitterShareButton className={`${loading ? 'hidden' : 'block'}`} url={`😇 Here is my latest AI-generated image powered by Raiinmaker.\n 🔗 ${uploadedImageUrl}`}>
                                <TwitterIcon className="rounded-full size-10" />
                            </TwitterShareButton>

                            <FacebookShareButton className={`${loading ? 'hidden' : 'block'}`} url={`😇 Here is my latest AI-generated image powered by Raiinmaker.\n 🔗 ${uploadedImageUrl}`}>
                                <FacebookIcon className="rounded-full size-10" />
                            </FacebookShareButton>
                        </>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AiImagePreviewItem;
