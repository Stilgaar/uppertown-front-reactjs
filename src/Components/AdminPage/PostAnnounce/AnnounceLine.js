import FormContext from "../../../Context/FormContext";
import { useContext } from "react";

function AnnounceLine({ entry }) {
    const FormContextValue = useContext(FormContext)

    return (
        <div className="display-f fd-c p-0 justify-center container col-5-xl">
            {!entry.select && !entry.option && !entry.photos && !entry.values && !entry.part &&
                <> <label className="label">{entry.label}</label>
                    <input className="input"
                        type={entry.type}
                        placeholder={entry.placeholder}
                        name={entry.name}
                        onChange={FormContextValue.handleChange} />
                </>}

            {entry.select &&
                <> <label className="label">{entry.label}</label>
                    <select onChange={(e) => FormContextValue.handleChange(e, entry.name)}>
                        <option disabled selected>--  Faites votre choix --</option>
                        {entry.list.slice(1).map((region, index) => (
                            <option
                                className="input"
                                value={region.value}
                                key={index}
                                name={entry.name}
                                type={entry.type}>
                                {region.label}
                            </option>
                        ))}
                    </select></>}

            {entry.part &&
                <><label className="label">{entry.label}</label>
                    {FormContextValue?.data?.price !== undefined && FormContextValue?.data?.share_number !== undefined ?
                        <div>{FormContextValue?.data?.price / FormContextValue?.data?.share_number}</div>
                        : <div>0</div>}
                </>}

            {entry.option &&
                <> <label className="label">{entry.label}</label>
                    {entry.list.map((option, index) => (
                        <div key={index}>
                            <input
                                value={option.value}
                                text={option.value}
                                type={entry.type}
                                name={entry.name}
                                onChange={(e) => FormContextValue.handleChange(e, option.value, entry.type)} />
                            {option.label}
                        </div>
                    ))}
                </>}

            {entry.photos &&
                <><label className="label">{entry.label}</label>
                    <input
                        className="input"
                        multiple
                        type={entry.type}
                        name={entry.name}
                        onChange={(e) => {
                            FormContextValue.handleFile(e)
                        }} />
                </>}

            {entry.values && <>
                <label className="label">{entry.label}</label>
                {entry?.values?.map((elem) => (
                    <div
                        key={elem}><input
                            type={entry.type}
                            placeholder={entry.placeholder}
                            name={entry.name}
                            value={elem}
                            onChange={(e) => FormContextValue.handleChange(e, entry.name, entry.type)} />
                        {elem}
                    </div>))}
            </>}
        </div>
    )
}

export default AnnounceLine;