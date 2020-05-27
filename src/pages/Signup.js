import React, {useState} from "react";
import Cookies from 'js-cookie'

import Login from '../pages/Login';

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [token, setToken] = useState("")
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const Inscription = () => {
      const data = {
          username: username,
          email: email,
          password: password
        }
        fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local/register', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
         body: JSON.stringify(data)
        })
      .then(response => response.json())
      .then(response => {
              console.log(response)
              setToken(response.jwt)
              Cookies.set('token', token, { expires: 7 })
            })
      .catch(error => console.log(error));
     

    
  }

  return (
    <>
    <h2>Inscription</h2>
     <input type="text" placeholder="email" value={email} onChange={handleEmailChange} required/>
      <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} required/>
      <input type="username" placeholder="username" value={username} onChange={handleUsername} required/>
      <button onClick={Inscription}>Submit</button>
      {token !== "" &&
        <h1>Inscription réusie</h1>
      }
    </>
  );
};
export default Signup;