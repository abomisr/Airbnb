import {create as add} from "zustand";

interface RentModalStore {
    isOpen:boolean;
    onOpen():void;
    onClose():void;
}

const useRentModal = add<RentModalStore>((set)=>({
   isOpen: false,
   onOpen: ()=>set({isOpen:true}),
   onClose: ()=>set({isOpen:false}) 
}))


export default useRentModal;