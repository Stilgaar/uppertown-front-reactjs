import { createContext } from "react";
import useSubmit from "../Hooks/useSubmit";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [FormContextValue] = useSubmit()

    return (
        <GlobalContext.Provider value={FormContextValue} >
            {children}
        </GlobalContext.Provider>
    )
}
