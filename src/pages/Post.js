import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie'


const Post = () => {

    const [content, setContent] = useState('');
    const [user, setUser] = useState(103)
    const [token, setToken] = useState('');

    console.log(user)
    console.log(content)

    useEffect(() => {
        setToken(Cookies.get("token"));
        console.log(token);
      }, []);

    const message = () => {

        const data = {
            text: content, 
            user: user
        }
        
        fetch('https://api-minireseausocial.mathis-dyk.fr/posts', {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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
              
          })
          .catch((error) => console.log(error))
    }

    return(
        <div>
            <h2> Write your message</h2>
            <input type='text' placeholder="message" value={content} onChange={(e) => setContent(e.target.value)}></input>
            <button onClick={message}>Submit message</button>
        </div>
    )

}

export default Post;