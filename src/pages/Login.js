import React, { useState } from 'react';
import Cookies from 'js-cookie'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const login = () => {
    const data = {
      identifier: email,
      password: password
    }
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local/", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      return response})
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        setToken(response.jwt)
        Cookies.set('token', response.jwt, { expires: 7 })
        alert("connected")
        console.log(Cookies.get())
    })
    .catch((error) => alert(error))
  }
  return (
    <>
    <h2>Connection</h2>
      <input type="text" placeholder="email" value={email} onChange={handleEmailChange} required/>
      <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} required/>
      <button onClick={login}>Submit</button>
      {token !== "" &&
        <h1>Hello World</h1>
      }
    </>
  )
}
export default Login;