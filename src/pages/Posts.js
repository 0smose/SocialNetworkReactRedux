import React,  {useState, useEffect} from 'react'; 
import Cookies from 'js-cookie'
import uniqid from 'uniqid'
import { LikeOutlined } from '@ant-design/icons'





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

    const like = (post) => {
      const data = {
        like: post.like + 1
      }
      fetch(`https://api-minireseausocial.mathis-dyk.fr/posts/${post.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((response) => {
      })
      .catch((error) => {
        console.log(error)
      })

    }

    return(
        <div>
          <ul>
            {posts.map((post, id) => {
              if (post.text !== null && post.user !==null) {
                return (
                <li key={uniqid()}>{post.text} by <b>{post.user.username}</b>
                <span> {post.like}</span>
                <button onClick={() => like(post)}> <LikeOutlined /></button>
               
                </li>
                )  
              }        
            })}
          </ul>
        </div>
    )

}


export default Posts;