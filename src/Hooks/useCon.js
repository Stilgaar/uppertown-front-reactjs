import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { GlobalURL } from "../Context/GlobalContext";

export const useCon = () => {

    const submit = useContext(GlobalContext);
    const url = useContext(GlobalURL)

    return { submit, url }
}