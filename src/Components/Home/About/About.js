import "./About.css";

function About({ info }) {
  return (
      <div className="about-container-container">
    <div className="about-container-image">
      <div className="about-container-text">
        <h1>{info?.[0]?.maintitle}</h1> <br />
        <p>{info?.[0]?.maincontent}</p>
      </div>
        <img
          src="https://www.icietlabas.fr/wp-content/uploads/2021/05/Photographie-Architecturale-Barlelone-que-faire-a-Barcelone-Que-faire-en-espagne-Tutoriel-Photo-Tuto-Photo-blog-voyage-32-scaled.jpg"
          alt="Photo accueil"
        /> 
      </div>
      </div>
   
  );
}

export default About;
