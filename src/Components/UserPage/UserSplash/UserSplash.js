import './UserSplash.css'

function UserSplash({ user, setState }) {

    return (
        <div className="usersplash-container">
            <h3>Bienvenue dans votre espace utilistateur {user?.firstname} {user?.lastname}

                {user?.stableCoins !== 0 && <div>Votre portefeuille de StableCoins s'éléve à {user?.stableCoins?.toLocaleString()}
                </div>} </h3>

            <div className="usersplash-text-container">
                Pour pouvoir bénéficier de tous les services que
                UpperTown vous propose, nous devons, pour des raisons légales,
                d'abord vérifier votre identité.
                <br /><br />
                Nous vous invitons à vous rendre dans l'espace
                <span onClick={() => setState('params')}
                    className="usersplash-false-link">
                    Gérer mon compte
                </span>
            </div>
        </div>
    )
}

export default UserSplash;