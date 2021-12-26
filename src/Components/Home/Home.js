import "./Home.css";
import "./Home.scss";

import React from "react";
import Signup from "../Home/Signup/Signup";
import Login from "../Home/Login/Login";
import Infos from "./Infos/Infos";
import About from "./About/About";
import OneAnnounce from "./OneAnnounce/OneAnnounce";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import useURL from "../../Hooks/useURL";
import FormContext from "../../Context/FormContext";

function Home(props) {
  const [users, setUsers] = useState([]);
  const [ann, setAnn] = useState([])
  const [info, setInfo] = useState([]);
  const [url] = useURL();
  const FormContextValue = useContext(FormContext);

  useEffect(async () => {
    await axios.get(`${url}/api/users/users`).then((res) => setUsers(res.data));
    await axios
      .get(`${url}/api/announces/allAnnounces`)
      .then((res) => setAnn(res.data));
    await axios.get(`${url}/admin/getRib`).then((res) => setInfo(res.data));
  }, []);

  return (
    <div>
      <div className="home">
        {FormContextValue.formSigin && (
          <Signup
            handleLogin={FormContextValue.handleLogin}
            handleSigin={FormContextValue.handleSigin}
            handleClick={FormContextValue.handleClick} 
          />
        )}
        {FormContextValue.formLogin && (
          <Login
            hardRefresh={props.hardRefresh}
            handleLogin={FormContextValue.handleLogin}
            handleSigin={FormContextValue.handleSigin}
            handleClick={FormContextValue.handleClick} 
          />
        )}
        <img
          src="https://www.icietlabas.fr/wp-content/uploads/2021/05/Photographie-Architecturale-Barlelone-que-faire-a-Barcelone-Que-faire-en-espagne-Tutoriel-Photo-Tuto-Photo-blog-voyage-32-scaled.jpg"
          alt="Photo accueil"
        />
        <About info={info} />
      </div>
      <OneAnnounce ann={ann} />
      <Infos users={users} ann={ann} />
    </div>
  );
}

export default Home;
