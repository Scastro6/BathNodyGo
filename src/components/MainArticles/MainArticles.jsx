import { useEffect, useState } from 'react'

import Post from "./Post/Post.jsx";
import postFuncs from "../../data/posts.js"

const MainArticles = () => {

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        console.log(postFuncs)
        const rawPosts = postFuncs.getPosts();
        setPosts(rawPosts);
    }, [])

    

    return (
        <section key="section1">
            {
                posts.map(post => <Post
                        id= {post.id}
                        titulo={post.titulo}    
                        fecha={post.fecha}
                        contenido={post.contenido}
                        imgUrl={post.imgUrl}
                        tags={post.tags}
                        key={post.titulo}
                    />)
            }
        </section>
    )
}

export default MainArticles;