import { rib } from '../../../JSON/Arrays';
import RibLine from './RibLine';
import { useCon } from '../../../Hooks/useCon';

function AddRib() {

    const { handleSubmit, handleURL } = useCon()
    const { url } = useCon()

    return (

        <div className="container-xl">
            <h3 className="bg-primary text-white t-center font-lg br-xs m-1 mb-3 p-1">Ajouter un RIB ou mettre à jour son RIB</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='display-f fd-c p-0 justify-center container col-5-xl'>
                    {rib.map((entry, index) => (
                        <RibLine key={index} entry={entry} />))}
                    <button
                        onMouseEnter={() => handleURL(`${url}/admin/newRib`)}
                        className="btn-outlined-primary text-hover-white font-sm anul" type='submit' >
                        Envoyer
                    </button>
                </div>
            </form >
        </div >
    )
}

export default AddRib;