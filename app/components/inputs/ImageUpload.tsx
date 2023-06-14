"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
    var cloudinary: any
}


interface ImageUploadProps {
    onChange: (value: string) => void,
    value: string,
}
const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {

    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url);
    }, [onChange]);

    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset="asreyq1h"
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => {
                return (
                    <div onClick={() => open?.()} className="border-dashed relative cursor-pointer hover:opacity-70 border-neutral-300 p-20 border-2 flex flex-col items-center justify-center text-neutral-600 gap-4">
                        <TbPhotoPlus size={50} />
                        <div className="font-semibold text-lg">
                            Click to upload
                        </div>
                        {value && (
                            <div className="
              absolute inset-0 w-full h-full">
                                <Image
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    src={value}
                                    alt="House"
                                />
                            </div>
                        )}
                    </div>
                )
            }}
        </CldUploadWidget>
    )
}

export default ImageUpload