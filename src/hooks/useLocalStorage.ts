import { useContext } from "react";
import LocalStorageContext, { LocalStorageContextType } from "../context/localStorage";

export const useLocalStorageContext = (): LocalStorageContextType => {
    const context = useContext(LocalStorageContext)

    if(!context) {
        throw new Error('useLocalStorageContext must be used within a LocalStorageProvider')
    }

    return context
}