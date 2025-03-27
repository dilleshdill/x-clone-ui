import Image from "@/Components/Image";
import NextImage from "next/image";
import React,{ use, useEffect, useState } from "react";
import { ShareAction } from "./ShareAction";
import ImageEditor from "./ImageEditor";
const Share = () => {

    const [media , setMedia] = useState<File | null>(null);
    const [isImageOpen,setIsImageOpen] = useState(true);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    
    const [settings, setSettings] = useState<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
      }>({
        type: "original",
        sensitive: false,
      });

    const handelMediaChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0]);
        }
    }

    const previewUrl = media ? URL.createObjectURL(media) : null;
    
    
    return (
        <form className="flex gap-4 p-4 " action={(formData) => ShareAction(formData, settings)}>
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image path="public/general/avatar.png" alt="User avatar" w={100} h={100} tr={true} />
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="What's happening?"
                    name="desc"
                    className="bg-transparent text-white text-lg w-full outline-none placeholder:text-textGray"
                />
                {
                    previewUrl && isImageOpen && (
                    <div className="relative rounded-xl overflow-hidden ">
                        <NextImage src={previewUrl} alt="media" 
                        className={`w-full ${
                            settings.type === "original"
                                ? "h-full object-contain"
                                : settings.type === "square"
                                ? "aspect-square object-cover"
                                : "aspect-video object-cover"
                            }`} layout="responsive" width={300} height={300} />
                        <div>
                        <button className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 text-sm cursor-pointer font-bold rounded-full" onClick={()=>{setIsEditorOpen(true)}}>Edit</button>
                            {/* <button className="absolute top-2 right-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full" >X</button> */}
                        </div>
                    </div>
                )}
                { isEditorOpen && previewUrl && <ImageEditor onClose={()=>setIsEditorOpen(false)} settings={settings} setSettings={setSettings} previewURL={previewUrl} />}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex gap-4 flex-wrap cursor-pointer">
                        
                        <input type="file" id="file" name="file" onChange={handelMediaChange} className="hidden" />
                        <label htmlFor="file" className="flex items-center gap-2">
                            <Image path="public/icons/image.svg" alt="image" w={24} h={24} onClick={()=>{setIsImageOpen(true)}} />
                         </label>
                        
                        <Image path="public/icons/gif.svg" alt="gif" w={24} h={24} />
                        <Image path="public/icons/poll.svg" alt="poll" w={24} h={24} />
                        <Image path="public/icons/emoji.svg" alt="emoji" w={24} h={24} />
                        <Image path="public/icons/schedule.svg" alt="schedule" w={24} h={24} />
                    </div>
                    <button className="bg-white text-black font-bold px-4 py-2 rounded-full">Post</button>
                </div>
                
            </div>
        </form>
    );
}
export default Share;