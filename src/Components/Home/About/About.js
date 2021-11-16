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
          src="https://cdn.discordapp.com/attachments/888810751370870825/909812937907109928/Photographie_Architecturale_Barlelone_que_faire_a_Barcelone_Que_faire_en_espagne_Tutoriel_Photo_Tuto_Photo_blog_voyage-32.jpg"
          alt="Photo accueil"
        /> 
      </div>
      </div>
   
  );
}

export default About;
