import axios from 'axios';
import env from "react-dotenv";
import { useEffect, useState } from "react";

export default function useURL() {

    const [url, setURL] = useState(env.URL)
   
   //  useEffect(() =>  {
  //      axios.get(`${env.URL}/admin/hostname`).then((res) => setURL(res.data));
  //  }, [])

    return [url]
}