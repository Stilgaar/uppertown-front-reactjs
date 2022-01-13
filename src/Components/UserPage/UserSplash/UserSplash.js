function UserSplash({ user, setState }) {

    return (
        <div className="global-container mt">

            <h3 className="bg-primary text-white t-center font-lg br-xs ml-5 mr-5 mb-3 p-1">Bienvenue dans votre espace utilistateur {user?.firstname} {user?.lastname}.
                {user?.stableCoins !== 0 && <> Votre portefeuille de StableCoins s'éléve à {user?.stableCoins?.toLocaleString()}
                </>} </h3>

            <div className="card bg-white p-5">
                Pour pouvoir bénéficier de tous les services que
                <span className='text-primary fw-br'> UpperTown </span>vous propose, nous devons, pour des raisons légales,
                d'abord vérifier votre identité.
                <br /><br />
                Pour cela nous aurons besoin de :
                <ul>
                    <li>- Votre pièce d'identité</li>
                    <li>- Votre justificatif de domcicile</li>
                    <li>- Votre dernier avis d'imposition</li>
                </ul>
                <br /> <br />
                Nous vous invitons à vous rendre dans votre <span onClick={() => setState('params')} className="usersplash-false-link"> espace personnel </span>
            </div>
        </div>
    )
}

export default UserSplash;