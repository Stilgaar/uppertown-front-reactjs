import Signup from "../Home/Signup/Signup";
import Login from "../Home/Login/Login";
import Infos from "./Infos/Infos";
import About from "./About/About";
import OneAnnounce from "./OneAnnounce/OneAnnounce";
import { useCon } from "../../Hooks/useCon";

function Home() {

  const { state } = useCon()

  return (
    <div>
      <div className="home">
        {state === "signin" && (
          <Signup />
        )}
        {state === "login" && (
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



