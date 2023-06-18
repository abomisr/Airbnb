import {create as add} from "zustand";

interface SearchModalStore {
    isOpen:boolean;
    onOpen():void;
    onClose():void;
}

const useSearchModal = add<SearchModalStore>((set)=>({
   isOpen: false,
   onOpen: ()=>set({isOpen:true}),
   onClose: ()=>set({isOpen:false}) 
}))


export default useSearchModal;