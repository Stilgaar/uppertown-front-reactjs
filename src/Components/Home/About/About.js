import useFetch from "../../../Hooks/useFetch";
import { useCon } from '../../../Hooks/useCon'

function About() {

  const { url } = useCon()
  const { data: info, error, pending } = useFetch(`${url}/admin/getRib`)

  return (
    <div className="container mt-5 mb-5 p-4">
      <div className="bg-white mt-5 mb-5 p-4 o-90 br-xs">
        {pending && <h1 className="bg-primary text-white p-1">Chargment ... </h1>}
        {error && <h1 className="bg-primary text-white p-1">{error}</h1>}
        {info && <h1 className="bg-primary text-white p-1">{info?.[0]?.maintitle}</h1>}
        <br />
        {pending && <p className="font-md">Chargment ... </p>}
        {error && <p className="font-md">{error}</p>}
        {info && <p className="font-md">{info?.[0]?.maincontent}</p>}
      </div>
    </div>
  );
}

export default About;
