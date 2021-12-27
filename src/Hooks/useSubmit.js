import { useEffect, useState } from "react";
import axios from "axios";

function useSubmit(url) {
  const [data, setData] = useState({});
  const [resMsg, setResMsg] = useState();
  const [form, setForm] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist()
    e.target.reset()
    axios.post(url, data)
      .then((res) => {
        console.log(res.data)
        if (res.data === "Compte crée avec Succéss !") {
          setResMsg(res.data)
          setTimeout(function () {
            setResMsg('');
            handleLogin();
          }, 1500);
        }
        else if (res.data.token) {
          localStorage.setItem("@updownstreet-token", res.data.token);
          localStorage.setItem("id", res.data.userId);
          handleClick()
          document.location.replace('/');
        }
        else {
          setResMsg(res.data)
          setTimeout(function () {
            setResMsg('');
          }, 2500);
        }
      })
      .then(() => { })
      .catch((err) => console.log(err))
  };

  const handleClick = () => {
    setForm()
  }

  const handleLogin = () => {
    setForm("login")
  }

  const handleSigin = () => {
    setForm("signin")
  }

  const handleChange = (e) => {
    e.preventDefault()
    e.persist()
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const FormContextValue = {
    form: form,
    handleLogin: handleLogin,
    handleSigin: handleSigin,
    handleClick: handleClick,

  };

  return [data, handleChange, handleSubmit, resMsg, handleClick, handleLogin, handleSigin, form, FormContextValue];
}

export default useSubmit;