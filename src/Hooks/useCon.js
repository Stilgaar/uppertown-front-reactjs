import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

export const useCon = () => {
    const submit = useContext(GlobalContext);
    return submit
}