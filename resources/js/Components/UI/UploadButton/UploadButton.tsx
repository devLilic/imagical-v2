import React, {ChangeEvent} from 'react';
import UploadSvg from "@/Components/UI/UploadButton/UploadSvg";

interface IUploadButton{
    classes: string,
    title: string
    handleChange: (e: ChangeEvent<HTMLInputElement>)=>void
}

const UploadButton = ({classes, title, handleChange}: IUploadButton) => {
    const labelClasses = "flex flex-col justify-center items-center px-6 py-6 " +
        "rounded-lg tracking-wide uppercase border border-blue " +
        "cursor-pointer "+classes;
    return (
        <label className={labelClasses}>
            <UploadSvg/>
            <span className='mt-2'>{title}</span>
            <input type="file" className="hidden" onChange={handleChange}/>
        </label>
    )
};

export default UploadButton;
