import "./About.css";

function About({ info }) {
  return (
    <div className="about-container-container">
      <div className="about-container-image">
        <div className="about-container-text">
          <h1>{info?.[0]?.maintitle}</h1> <br />
          <p>{info?.[0]?.maincontent}</p>
        </div>
      </div>
    </div>

  );
}

export default About;
