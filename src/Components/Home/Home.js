import "./Home.css";
import Signup from "../Home/Signup/Signup";
import Login from "../Home/Login/Login";
import Infos from "./Infos/Infos";
import About from "./About/About";
import OneAnnounce from "./OneAnnounce/OneAnnounce";
import { useContext } from "react";
import FormContext from "../../Context/FormContext";

function Home() {

  const FormContextValue = useContext(FormContext)

  return (
    <div>
      <div className="home">
        {FormContextValue.form === "signin" && (
          <Signup />
        )}
        {FormContextValue.form === "login" && (
          <Login />
        )}

        <img
          src="https://www.icietlabas.fr/wp-content/uploads/2021/05/Photographie-Architecturale-Barlelone-que-faire-a-Barcelone-Que-faire-en-espagne-Tutoriel-Photo-Tuto-Photo-blog-voyage-32-scaled.jpg"
          alt="Photo accueil"
        />

        <About />
      </div>
      <OneAnnounce />
      <Infos />
    </div>
  );
}

export default Home;



