import React,  {useState, useEffect} from 'react'; 
import Cookies from 'js-cookie'
import { render } from '@testing-library/react';
import uniqid from 'uniqid'

const Posts = () => {

    const [token, setToken] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setToken(Cookies.get("token"));
        console.log(token);
      }, []);
    
    useEffect(() => {
      fetch('https://api-minireseausocial.mathis-dyk.fr/posts', {
        method: 'get', 

      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setPosts(response)

    
      })
    }, [])

    return(
        <div>
          <ul>
            {posts.map((post, id) => {
              if (post.text !== null && post.user !==null) {
                return (
                <li key={uniqid()}>{post.text} by <b>{post.user.username}</b></li>
                )  
              }        
            })}
          </ul>
        </div>
    )

}


export default Posts;