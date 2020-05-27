import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie'

const Profil = () => {

    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');
  

    useEffect(() => {
      setToken(Cookies.get("token"));
      console.log(token);
    }, []);
   
    useEffect(() => {
      const myProfil = () => {
        fetch('https://api-minireseausocial.mathis-dyk.fr/users/me', {
          method: 'get', 
          headers: {
      	    'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          setUsername(response.username)
        })
      }
      myProfil()

    })



    return(

        <>
      
        <p> coucou {username}</p>
        </>
    )

}


export default Profil;