import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie'

const Profil = () => {

    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');
    const [user, setUser] = useState('');
    const [userPost, setUserPost] = useState([])
    const [edit, setEdit] = useState('');

    console.log(user.id)
    console.log(userPost)

    useEffect(() => {
      setToken(Cookies.get("token"));
    }, []);
   
   
      useEffect(() => {
        fetch('https://api-minireseausocial.mathis-dyk.fr/users/me', {
          method: 'get', 
          headers: {
      	    'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          // setUserPost(response)
         setUsername(response.username)
         setUser(response)
        })


      }, [token])
        
      const handleEdit = (e) => {
        setEdit(e.target.value)
      }

      const posts = () => {
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

      const deletePost = (postToDelete) => {
        fetch(`https://api-minireseausocial.mathis-dyk.fr/posts/${postToDelete}`, {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
        })
        .catch((error) => console.log(error))
      }
      

      const editPost = (postToEdit) => {

        const data = {
          text: edit
        }
        fetch(`https://api-minireseausocial.mathis-dyk.fr/posts/${postToEdit}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
        })
        .catch((error) => console.log(error))

      }
     



    return(

        <>
        <p> coucou {username}</p>
        <button onClick={posts}>voir les post</button>
        {userPost.map((post, id) => (
          <li key={id}>{post.text} <button onClick={() => deletePost(post.id)}>delete</button> 
          <input value={edit} onChange={(e) => setEdit(e.target.value)}></input>
          <button onClick={() => editPost(post.id)}>edit</button></li>
        ))}
        </>
    )

}


export default Profil;