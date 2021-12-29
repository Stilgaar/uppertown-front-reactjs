import { useState } from "react";
import axios from "axios";

function useSubmit(info) {
  const [data, setData] = useState({});
  const [resMsg, setResMsg] = useState();
  const [form, setForm] = useState();
  const [url, setUrl] = useState()

  console.log("data", data)
  console.log(url)

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

  const handleEnvoi = () => {
    axios.post(url, data)
      .then((res) => { console.log(res.data) })
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

  const handleData = (email) => {
    setData((data) => ({ ...data, ['email']: email }))
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