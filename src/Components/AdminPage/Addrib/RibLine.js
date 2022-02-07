import { useCon } from "../../../Hooks/useCon";

function RibLine({ entry }) {

    const { handleChange } = useCon()

    return (
        <>
            <div><label className="label">{entry.label}</label></div>
            <input className="input mb-1"
                name={entry.name}
                type={entry.type}
                placeholder={entry.placeholder}
                onChange={handleChange} />
        </>
    )
}

export default RibLine;