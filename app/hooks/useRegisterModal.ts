import {create as add} from "zustand";

interface RegisterModalStore {
    isOpen:boolean;
    onOpen():void;
    onClose():void;
}

const useRegisterModal = add<RegisterModalStore>((set)=>({
   isOpen: false,
   onOpen: ()=>set({isOpen:true}),
   onClose: ()=>set({isOpen:false}) 
}))


export default useRegisterModal;