import { useState } from "react";
import axios from "axios";

// FONCTION POUR LES FORMULAIRES && LA BARRE DE NAVIGATION

function useSubmit(info) {
  const [data, setData] = useState({});
  const [clickData, setClickData] = useState({})
  const [resMsg, setResMsg] = useState();
  const [form, setForm] = useState();
  const [url, setUrl] = useState()

   console.log("URL", url)
   console.log("DATA", data)
  console.log("clickData", clickData)

  const handleSubmit = (e) => {
    console.log("click")
    e.preventDefault();
    e.persist()
    e.target.reset()
    axios.post(url, data)
      .then((res) => {
        if (res.data === "Compte crée avec Succéss !") {
          setResMsg(res.data)
          setTimeout(() => {
            setResMsg('');
            setForm('login')
          }, 1500);
        }
        else if (res.data.token) {
          localStorage.setItem("@updownstreet-token", res.data.token);
          localStorage.setItem("id", res.data.userId);
          document.location.replace('/');
        }
        else {
          setResMsg(res.data)
          setTimeout(() => {
            setResMsg('');
          }, 2500);
        }

      })
      .catch((err) => console.log(err))
  };

  const handleData = (email, argent, _id) => {
    if(email){
    setClickData((clickData) => ({ ...clickData, ['email']: email }))
    }
    if(argent) {
      setClickData((clickData => ({...clickData, ['argent']: argent})))
    }
    if(_id) {
      setClickData((clickData => ({...clickData, ['id']: _id})))
    }
  }

  const handleEnvoi = () => {
    axios.post(url, clickData)
      .then((res) => { console.log(res.data) })
      .then(() => {
        setClickData(null) 
      })
      .catch(err => console.log(err))
  }

  const handleClick = () => {
    setForm('')
  }

  const handleLogin = () => {
    setForm('login')
  }

  const handleSigin = () => {
    setForm('signin')
  }

  const handleURL = (data) => {
    setUrl(data)
  }

  const handleChange = (e) => {
    e.preventDefault()
    e.persist()
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    if (info) {
      setData((data) => ({ ...data, ['email']: info }));
    }
    
  };

  const logout = () => {
    localStorage.removeItem("@updownstreet-token");
    localStorage.removeItem("@uppertown-url");
    document.location.replace('/');
  }

  const FormContextValue = {
    form: form,
    data: data,
    resMsg: resMsg,
    handleChange: handleChange,
    handleLogin: handleLogin,
    handleSigin: handleSigin,
    handleClick: handleClick,
    handleSubmit: handleSubmit,
    handleURL: handleURL,
    handleData: handleData,
    handleEnvoi: handleEnvoi,
    logout: logout,
  };

  return [FormContextValue];
}

export default useSubmit;