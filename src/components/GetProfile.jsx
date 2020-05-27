import React from "react";
import Cookies from 'js-cookie'

const GetProfile = () => {
    const myToken = Cookies.get('token')
    console.log(myToken)
    fetch('https://api-minireseausocial.mathis-dyk.fr/users/me', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${myToken}`, 
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error));

    return(
        <>
          <button onClick={GetProfile}>Refresh my dashboard</button>
          <p>{myToken}</p>
        </>
    )
};

export default GetProfile;