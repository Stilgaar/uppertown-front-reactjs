import './About.css'

function About({info}) {
    return(
        <div className="about-container-container">
    <h1>{info?.[0]?.maintitle}</h1> <br/>    
    <p>{info?.[0]?.maincontent}</p>
</div>

    )
}

export default About;