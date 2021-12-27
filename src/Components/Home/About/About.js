import "./About.css";
import useURL from "../../../Hooks/useURL";
import useAxios from "../../../Hooks/useAxios";

function About() {

  const [url] = useURL();
  const [info] = useAxios(`${url}/admin/getRib`)

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
