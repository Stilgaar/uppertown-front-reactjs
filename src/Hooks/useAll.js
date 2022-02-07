import useSubmit from "./useSubmit";
import useURL from "./useURL";

// si jamais vous passez par ici, useAll est le hook perso par lequel je fais passer toutes mes variables d'autres hooks persos que je veux faire passer à travers tout mon usecontext.
// notez que ça peut venir de toute et n'importe ou. =)

function useAll() {

    const { state, data, resMsg, setData, setClickData, setUrl, handleChange, handleLogin, handleSignup, handleSubmit, handleURL, handleData, handleEnvoi, handleFile, handleClick, logout, } = useSubmit()

    const { url } = useURL()

    const all = {
        state, data, resMsg, setData, setClickData, setUrl, handleChange, handleLogin, handleSignup, handleSubmit, handleURL, handleData, handleEnvoi, handleFile, handleClick, logout, url
    };

    return { all }

}

export default useAll;