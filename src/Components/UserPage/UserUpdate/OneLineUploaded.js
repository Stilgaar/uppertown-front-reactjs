import "./UserUpdate.css"
import { useCon } from "../../../Hooks/useCon"

function OneLineUploaded({ user, data, hardRefresh }) {

    const { handleURL, handleData, handleEnvoi, setClickData, url } = useCon()

    return (
        <>
            <img className="col-2-xl" src={data} alt="justificatif" />
            <button
                className="btn-outlined-primary text-hover-white font-sm anul"
                onMouseEnter={() => {
                    handleURL(`${url}/up/delete/${user._id}`)
                    handleData({ pic: data })
                }}
                onClick={(e) => {
                    handleEnvoi(e)
                    hardRefresh()
                }}
                onMouseLeave={() => {
                    setClickData()
                }}>
                Supprimer
            </button>
        </>
    )
}

export default OneLineUploaded;