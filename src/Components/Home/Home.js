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

        <About />
      </div>

      <OneAnnounce />
      <Infos />
    </div>
  );
}

export default Home;



