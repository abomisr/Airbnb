"use client";
import { IconType } from "react-icons";


interface ButtonProps {
    label:string;
    disabled?:boolean;
    onClick:(e:React.MouseEvent<HTMLButtonElement>) => void;
    outline?:boolean;
    small?:boolean;
    icon?:IconType;
}

const Button:React.FC<ButtonProps> = ({
    label,
    disabled,
    onClick,
    outline,
    small,
    icon
}) => {
  return (
    <button onClick={onClick} className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        hover:opacity-80
        transition
        rounded-lg
        w-full
        ${outline? "bg-white":"bg-rose-500"}
        ${outline? "border-black":"bg-rose-500"}
        ${outline? "text-black":"text-white"}
        ${small? "py-1":"py-3"}
        ${small? "text-sm":"text-md"}
        ${small? "font-light":"font-semibold"}
        ${small? "border-[1px]":"border-2"}
    `}>
        {label}
    </button>
  )
}

export default Button