import { createContext } from "react";
import useSubmit from "../Hooks/useSubmit";
import useURL from "../Hooks/useURL"

export const GlobalContext = createContext()
export const GlobalURL = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [FormContextValue] = useSubmit()
    const [URL] = useURL()

    return (
        <GlobalURL.Provider value={URL.url}>
            <GlobalContext.Provider value={FormContextValue} >
                {children}
            </GlobalContext.Provider>
        </GlobalURL.Provider>
    )
}
