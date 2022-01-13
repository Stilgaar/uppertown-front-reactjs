import { useContext } from "react";
import URLContext from "../../../Context/URLcontext";
import useAxios from "../../../Hooks/useAxios";

function About() {

  const URLContextValue = useContext(URLContext)
  const [info] = useAxios(`${URLContextValue.url}/admin/getRib`)

  return (
    <div className="container mt-5 mb-5 p-4">
      <div className="bg-white mt-5 mb-5 p-4 o-90 br-xs">
        <h1 className="bg-primary text-white p-1">{info?.[0]?.maintitle}</h1> <br />
        <p className="font-md">{info?.[0]?.maincontent}</p>
      </div>
    </div>
  );
}

export default About;
