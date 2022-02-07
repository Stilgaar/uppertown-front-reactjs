import { createContext } from "react";
import useAll from '../Hooks/useAll'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const { all } = useAll()

    return (
        <GlobalContext.Provider value={all} >
            {children}
        </GlobalContext.Provider>
    )
}
