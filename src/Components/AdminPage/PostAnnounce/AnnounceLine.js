import { useCon } from "../../../Hooks/useCon";

function AnnounceLine({ entry }) {

    const { handleChange, data, handleFile } = useCon()

    return (
        <div className="display-f fd-c p-0 justify-center container col-5-xl">
            {!entry.select && !entry.option && !entry.photos && !entry.values && !entry.part &&
                <> <label className="label">{entry.label}</label>
                    <input className="input"
                        type={entry.type}
                        placeholder={entry.placeholder}
                        name={entry.name}
                        onChange={handleChange} />
                </>}

            {entry.select &&
                <> <label className="label">{entry.label}</label>
                    <select onChange={(e) => handleChange(e, entry.name)}>
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
                    {data?.price !== undefined && data?.share_number !== undefined ?
                        <div>{data?.price / data?.share_number}</div>
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
                                onChange={(e) => handleChange(e, option.value, entry.type)} />
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
                        onChange={handleFile} />
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
                            onChange={(e) => handleChange(e, entry.name, entry.type)} />
                        {elem}
                    </div>))}
            </>}
        </div>
    )
}

export default AnnounceLine;