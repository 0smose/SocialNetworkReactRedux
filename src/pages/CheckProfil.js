import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie'

const CheckProfil = () => {

    const [userid, setUserid] = useState('');
    const [token, setToken] = useState('');
    const [tempuser, setTempuser] = useState('me');
    const [user, setUser] = useState('')


    const handleUserChange = (e) => {
        setTempuser(e.target.value);

    }
    useEffect(() => {
        setToken(Cookies.get("token"));
        console.log(token);
      }, []);


        const myProfil = () => {
          fetch(`https://api-minireseausocial.mathis-dyk.fr/users/${tempuser}`, {
            method: 'get', 
            headers: {
                'Authorization': `Bearer ${token}`
            }
          })
          .then((response) => response.json())
          .then((response) => {
            console.log(response)
            setUser(response);
        
          })
        }


    return(
       <div>
        <h2>Wanna find a profil ?</h2>
        <input type="text" placeholder="userid to search" value={tempuser} onChange={handleUserChange} required/>
        <button onClick={myProfil}>Submit</button>
        {token !== "" &&
          <h1>Hello {user.username}</h1>
 
        }
        {token !== "" &&
        <p>{user.email}</p>

        }
        </div>
        

    )
}

export default CheckProfil;