import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie'

const CheckProfil = () => {

    const [userid, setUserid] = useState('');
    const [token, setToken] = useState('');
    const [tempuser, setTempuser] = useState('');
    const [user, setUser] = useState('')
    const [userPost, setUserPost] = useState([])


    const test = () => {
     fetch(`https://api-minireseausocial.mathis-dyk.fr/posts?user.id=${user.id}`, {
       method: 'get',
       headers: {
         'Authorization': `Bearer ${token}`
       }
     })
     .then((response) => response.json())
     .then((response) => {
       console.log(response)
      setUserPost(response)
     })
     .catch((error) => console.log(error));
     
    }


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
          {token !=="" &&
            <p>{user.email}</p>
          }
          <button onClick={test}>Voir la liste des posts</button>
      
          <ul>
            {userPost.map((post, id) => (
              <li key={id}>{post.text}</li>
            ))}
          </ul>
      </div>
        

    )
}

export default CheckProfil;