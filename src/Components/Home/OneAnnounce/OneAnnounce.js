import './OneAnnounce.css'

function OneAnnounce({ ann }) {

    let announceRandom = ann[Math.floor(Math.random() * ann.length)];

    return (
        <div className="oneannounce-container-container">

            <div className="oneannounce-container">
     
                <h4>UpDownStreet vous propose</h4>
                <img className="oneannounce-image-container" src={announceRandom?.image[0]} alt="" />
                <p className="onennounce-image-bottom-grey-bar">{announceRandom?.region} / {announceRandom?.city}</p>
          
            </div>


        </div>
    )
}

export default OneAnnounce;