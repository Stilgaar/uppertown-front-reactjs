import "./About.css";
import { useContext } from "react";
import URLContext from "../../../Context/URLcontext";
import useAxios from "../../../Hooks/useAxios";

function About() {

  const URLContextValue = useContext(URLContext)
  const [info] = useAxios(`${URLContextValue.url}/admin/getRib`)

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
