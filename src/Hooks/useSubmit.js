import { useState } from "react";
import axios from "axios";

// FONCTION POUR LES FORMULAIRES && LA BARRE DE NAVIGATION

function useSubmit() {

  // states utiles
  const [data, setData] = useState({});
  const [clickData, setClickData] = useState({})
  const [resMsg, setResMsg] = useState();
  const [form, setForm] = useState();
  const [url, setUrl] = useState()

  console.log("URL", url)
  //  console.log("DATA", data)
  console.log("clickData", clickData)
  //   console.log(resMsg)

  // fonction submit destiné aux inputs
  const handleSubmit = (e) => {
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


  // fonction de récuperation pour les images
  const handleForm = (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append('email', data.email.email)
    if (data.pieceidentite) {
      form.append('pieceidentite', data.pieceidentite)
    }
    else if (data.justificatifdomicile) {
      form.append('justificatifdomicile', data.justificatifdomicile)
    }
    else if (data.avisFiscal) {
      console.log('avis')
      form.append('avisFiscal', data.avisFiscal)
    }
    else if (data.picrib) {
      console.log('rib')
      form.append('picrib', data.picrib)
    }
    else { console.log("non") }
    console.log("HANDLEFORM", url, form)
    axios.post(url, form, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((res) => console.log(res.data))
      .catch(err => console.log(err))

  }

  // fonction récuperant sur un click, sans forumaire
  const handleData = (x, y) => {
    if (x) {
      setClickData((clickData) => ({ ...clickData, x }))
    }
    if (y) {
      setClickData((clickData => ({ ...clickData, y })))
    }
  }

  // fonction envoyant les datas sur les clicks de boutons simple
  const handleEnvoi = () => {
    console.log("HANDLE URL", url)
    console.log('HANDLE CLICK', clickData)
    axios.post(url, clickData)
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }


  // fonction récuperant sur les inputs de formulaire
  const handleChange = (e) => {
    e.preventDefault()
    e.persist()
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    if (clickData?.x?._id) {
      setData((data) => ({ ...data, ["_id"]: clickData.x }));
    }
    if (clickData?.x?.email) {
      setData((data) => ({ ...data, ["email"]: clickData.x }));
    }
  };

  const handleFile = (e) => {
    e.persist()
    setData((data) => (({ ...data, [e.target.name]: e.target.files[0] })))
    if (clickData?.x?.email) {
      setData((data) => ({ ...data, ["email"]: clickData.x }));
    }
  }

  // Gestion de la Navbar
  const logout = () => {
    localStorage.removeItem("@updownstreet-token");
    localStorage.removeItem("@uppertown-url");
    document.location.replace('/');
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

  // récupére les URL avant l'envoi dans le back
  const handleURL = (data) => {
    setUrl(data)
  }

  // useContext
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
    handleForm: handleForm,
    handleFile: handleFile,
    logout: logout,
  };

  return [FormContextValue];
}

export default useSubmit;