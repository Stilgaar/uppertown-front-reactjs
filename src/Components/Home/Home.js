import Signup from "../Home/Signup/Signup";
import Login from "../Home/Login/Login";
import Infos from "./Infos/Infos";
import About from "./About/About";
import OneAnnounce from "./OneAnnounce/OneAnnounce";
import { useCon } from "../../Hooks/useCon";

function Home() {

  const { form } = useCon()

  return (
    <div>
      <div className="home">
        {form === "signin" && (
          <Signup />
        )}
        {form === "login" && (
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



