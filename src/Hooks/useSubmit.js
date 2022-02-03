import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import useURL from './useURL'

// HOOK PERSONNEL POUR LES FORMULAIRES && LA BARRE DE NAVIGATION

function useSubmit() {

  const [theUrl] = useURL()
  // data est pour les données des inputs 
  const [data, setData] = useState({});
  // images récupére tous les files (logique)
  const [images, setImages] = useState([])
  // clickdata récupére des données aux clicks
  const [clickData, setClickData] = useState({})
  // resmsg sont les messages récupérés par res.send
  const [resMsg, setResMsg] = useState();
  // form est l'état de la barre de navigation
  // url est l'url d'envoi pour axios
  const [url, setUrl] = useState()

  // A laisser : pour la verification des données sur le site en général
  // console.log("URL", url)
  // console.log("DATA", data)
  // console.log("IMAGES", images)
  // console.log("CLICKDATA", clickData)
  //console.log("RESMSG", resMsg)

  const formReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { state: action.payload }
      case "SIGN":
        return { state: action.payload }
      case "NULL":
        return { state: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(formReducer, { state: "" })

  // fonction submit destiné aux inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist()
    // remets les champs à zero
    e.target.reset()

    axios.post(url, data)
      .then((res) => {
        // check du signin
        if (res.data === "Compte crée avec Succéss !") {
          setResMsg(res.data)
          setTimeout(() => {
            setResMsg('');
            dispatch({ type: "LOGIN", payload: 'login' })
          }, 1500);
        }
        // check du login, mets le token en local storage s'il y en a un 
        else if (res.data.token) {
          localStorage.setItem("@updownstreet-token", res.data.token);
          localStorage.setItem("id", res.data.userId);
          document.location.replace('/');
        }
        // sinon il mets le res message dans le setter. Renvoi aussi les messages au front pour l'affichage
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

  // fonction de récuperation pour les images ou quelconque formulaire qui a des images  s'occupe aussi d'envoyer de la data au besoin
  const handleForm = (e) => {
    e.preventDefault()
    const form = new FormData()
    // dans data {key : value}
    let key = Object.keys(data)
    let value = Object.values(data)
    // pour chaque key et val il fait un formdata
    for (let i = 0; i < key.length; i++) {
      form.append(key[i], value[i])
    }
    // calcule le share price s'il y en a un a chopper
    if (FormContextValue?.data?.price && FormContextValue?.data?.share_number) {
      let share_price = FormContextValue?.data?.price / FormContextValue?.data?.share_number
      form.append('share_price', share_price)
    }
    // fonction pour les images, en mets autant qu'il en a besoin 
    if (images) {
      let key = Object.keys(images)
      let val = Object.values(images)
      // pour plusieurs images (l'annonce par exemple)
      if (images.image) {
        for (let i = 0; i < images?.image?.length; i++) {
          form.append(key, val[0][i])
        }
      }
      // pour une image simple
      else {
        for (let i = 0; i < key.length; i++) {
          form.append(key[i], val[0][i])
        }
      }
    }
    // remet les champs à zero
    e.target.reset()
    axios.post(url, form, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((res) => { console.log(res.data) }) // messages à caller dans le front
      .catch(err => console.log(err))
      .then(() => setData({}))
      .then(() => setImages([]))
  }

  // fonction récuperant sur un click, sans forumaire // avec le ...args, je récup autant d'arguments que je veux. Il me les transforme et me les mets dans clickdata
  const handleData = (...args) => {
    for (let i = 0; i < args.length; i++) {
      let key = Object.keys(args[i])
      let val = Object.values(args[i])
      setClickData((clickData) => ({ ...clickData, [key]: val[0] }))
    }
  }

  // fonction envoyant les datas sur les clicks de boutons simple (de moins en moins utilisé)
  const handleEnvoi = () => {
    axios.post(url, clickData)
      .then((res) => { console.log(res.data) }) // mettre en place les retours dans le front
      .catch(err => console.log(err))
  }

  // fonction récuperant sur les inputs de formulaire
  const handleChange = (e, info, val) => {
    e.persist()
    // j'ai mis une exeption pour les types=radio et type=checkbox, sinon fallait doubler clickquer
    if (val !== "radio" && val !== "checkbox") { e.preventDefault() }

    // certains cas il mets j'avais besoin de mettre info dans le setter je crois j'en ai plus besoin mais j'ai peur que tout pète si je la vire =)
    if (info) {
      setData((data) => ({ ...data, [info]: e.target.value }));
    }
    // sinon il met tout dans la data avec le name=machin et sa valeur (cas le plus fréquent)
    else {
      setData((data) => ({ ...data, [e.target.name]: e.target.value }))
    }
    // récupére tout du clickdata pour le mettre dans le gros setter data
    if (clickData) {
      let key = Object.keys(clickData)
      let val = Object.values(clickData)
      for (let i = 0; i < Object.keys(clickData).length; i++) {
        setData((data => ({ ...data, [key[i]]: val[i] })))
      }
    }
  }

  // gestion du de la récuperation de fichiers, mets également les variables clicks dans data avant de l'envoyer dans le back
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
  const handleLogin = () => { dispatch({ type: "LOGIN", payload: 'login' }) }
  const handleSignup = () => { dispatch({ type: "SIGN", payload: 'signin' }) }
  const handleClick = () => { dispatch({ type: "NULL", payload: null }) }
  const logout = () => {
    localStorage.removeItem("@updownstreet-token");
    localStorage.removeItem("@uppertown-url");
    document.location.replace('/');
  }

  // récupére les URL avant l'envoi dans le back sur les fonctions spécifiques.
  const handleURL = (data) => { setUrl(data) }

  // useContext, utilisable partout =)
  const FormContextValue = {
    state: state.state,
    url: theUrl,
    data,
    resMsg,
    setData,
    setClickData,
    setUrl,
    handleChange,
    handleLogin,
    handleSignup,
    handleSubmit,
    handleURL,
    handleData,
    handleEnvoi,
    handleForm,
    handleFile,
    handleClick,
    logout,
  };

  // useEffect me calculant le nombre de stablecoins en fonction du prix des jetons, ne se trigger que s'il y a un 'amount' dans le setter data
  useEffect(() => {
    if (data.amount) {
      let amountStableCoins = (data.amount * data.share_price)
      setData((data) => ({ ...data, amountStableCoins }))
    }
  }, [data.amount, data.share_price])

  // je retourne que ça dans l'app.js, puis avec useContext je l'arose sur tous mes composants
  return [FormContextValue];
}

export default useSubmit;