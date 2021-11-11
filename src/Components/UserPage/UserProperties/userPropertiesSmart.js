import { useState, useEffect } from "react";
import UserPropertiesDumb from "./userPropertiesDumb";

function UserPropertiesSmart(props){

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [wallet, setWallet]= useState()


    //const d = new Date();
  
    const userOnline = localStorage.getItem("id")
    console.log("USERID : "+userOnline);
  
  
    function getUserDatas () {
      
      const url = "http://localhost:1337/api/users/"+userOnline
      fetch(url,
        {
          method: "GET",
        }
      )
        .then((response) => response.json()) 
        .then((result) => {
          console.log("Success:", result);
          setWallet(result.stableCoins)
          setFirstName(result.firstname)
          setLastName(result.lastname)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    
    }

    

    useEffect(() => {
    getUserDatas()
  }, [])

  return(
      <div>
          <UserPropertiesDumb firstName={firstName} lastName={lastName} wallet={wallet}/>
      </div>
  )
}

export default UserPropertiesSmart;