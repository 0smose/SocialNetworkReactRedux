import React from 'react';

const Reco = () => {

    fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local/', {
        method: 'post', 
        body: {
            identifier: "okçamarcheeeee?", 
            password: 'onvavoiiiir'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error));

    return (
        <>
        </>
    )
};


export default Reco;