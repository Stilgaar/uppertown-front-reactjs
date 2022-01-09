import { useState } from "react";
import axios from "axios";

// HOOK PERSONNEL POUR LES FORMULAIRES && LA BARRE DE NAVIGATION

function useSubmit() {

  // data est pour les données des inputs
  const [data, setData] = useState({});
  const [images, setImages] = useState([])
  // clickdata récupére des données aux clicks
  const [clickData, setClickData] = useState({})
  // resmsg sont les messages récupérés par res.send
  const [resMsg, setResMsg] = useState();
  // form est l'état de la barre de navigation
  const [form, setForm] = useState();
  // url est l'url d'envoi pour axios
  const [url, setUrl] = useState()


  // A laisser : pour la verification des données qui arrvivent
  // console.log("URL", url)
  console.log("DATA", data)
  //  console.log("IMAGES", images)
  //console.log("CLICKDATA", clickData)
  console.log("RESMSG", resMsg)

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
      .then(() => setData({}))
  };

  // fonction de récuperation pour les images
  // ou quelconque formulaire qui a des images
  // s'occupe aussi d'envoyer de la data au besoin
  const handleForm = (e) => {
    e.preventDefault()

    const form = new FormData()

    let key = Object.keys(data)
    let value = Object.values(data)

    for (let i = 0; i < key.length; i++) {
      form.append(key[i], value[i])
    }

    if (FormContextValue?.data?.price && FormContextValue?.data?.share_number) {
      let share_price = FormContextValue?.data?.price / FormContextValue?.data?.share_number
      form.append('share_price', share_price)
    }

    if (images) {
      let key = Object.keys(images)
      let val = Object.values(images)
      for (let i = 0; i < val.length; i++) {
        form.append(key, val[0][i])
      }
    }

    axios.post(url, form, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((res) => console.log(res.data))
      .catch(err => console.log(err))
      .then(() => setData({}))
      .then(() => setImages([]))
  }

  // fonction récuperant sur un click, sans forumaire
  // penser à envoyer les x et y de la façon suivante {key : value}
  const handleData = (...args) => {
    for (let i = 0; i < args.length; i++) {
      let key = Object.keys(args[i])
      let val = Object.values(args[i])
      setClickData((clickData) => ({ ...clickData, [key]: val[0] }))
    }
  }

  // fonction envoyant les datas sur les clicks de boutons simple
  const handleEnvoi = () => {
    axios.post(url, clickData)
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  // fonction récuperant sur les inputs de formulaire
  const handleChange = (e, info, val) => {
    e.persist()
    if (val !== "radio" && val !== "checkbox") { e.preventDefault() }

    if (info) {
      setData((data) => ({ ...data, [info]: e.target.value }));
    }
    else {
      setData((data) => ({ ...data, [e.target.name]: e.target.value }))
    }

    if (clickData) {
      let key = Object.keys(clickData)
      let val = Object.values(clickData)
      for (let i = 0; i < Object.keys(clickData).length; i++) {
        setData((data => ({ ...data, [key[i]]: val[i] })))
      }
    }
  }

  // gestion du de la récuperation de fichiers.
  // mets également les variables clicks dans data avant de l'envoyer dans le back
  const handleFile = (e) => {
    setImages((images) => (({ ...images, [e.target.name]: e.target.files })))
    if (clickData) {
      let key = Object.keys(clickData)
      let val = Object.values(clickData)
      for (let i = 0; i < Object.keys(clickData).length; i++) {
        setData((data => ({ ...data, [key[i]]: val[i] })))
      }
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
    setData: setData,
    setClickData: setClickData,
    setUrl: setUrl,
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