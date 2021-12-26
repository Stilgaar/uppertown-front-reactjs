import { useState } from "react";
import axios from "axios";

function useSubmit(url) {
  const [data, setData] = useState({});
  const [resMsg, setResMsg] = useState();
  const [formSigin, setFormSignin] = useState()
  const [formLogin, setFormLogin] = useState()
  
  console.log("usesubmit signin", formSigin)
  console.log("usesumbit login", formLogin)

   const handleSubmit = (e) => {
    e.preventDefault();
    e.persist()
    e.target.reset()
    axios.post(url, data)
    .then((res) => 
     { if (res.data === "Compte crée avec Succéss !")
       { setResMsg(res.data);
        setTimeout(function () {
          setFormLogin(true)
          setFormSignin(false)
          setResMsg('');
      }, 1000);
      } 
        else { setResMsg(res.data) }
    })
    .catch((err) => console.log(err))
  };

  const handleClick = () => {
    setFormLogin("")
    setFormSignin("")
  }

  const handleLogin = () => {
   setFormLogin(true)
   setFormSignin("")
  }
  
  const handleSigin = () => {
    setFormSignin(true)
    setFormLogin("")
  }

  const handleChange = (e) => {
    e.preventDefault()
    e.persist()
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const FormContextValue = {
    formLogin: formLogin,
    formSigin: formSigin,
    handleLogin: handleLogin,
    handleSigin: handleSigin,
    handleClick: handleClick,
    
  };

  return [data, handleChange, handleSubmit, resMsg, handleClick, handleLogin, handleSigin, formSigin, formLogin, FormContextValue];
}

export default useSubmit;

//setTimeout(function () {
//   setResMsg();
//    setFormState("login");
//  }, 2000);