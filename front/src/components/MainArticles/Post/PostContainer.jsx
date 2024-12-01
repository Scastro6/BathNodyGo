import postFuncs from "../../../data/posts.js"
import Post from "./Post.jsx"

const PostContainer = ({ id }) => {

    const rawPosts = postFuncs.getPosts(); 

    const post = rawPosts.find(post => post.id == id);

    const { titulo, fecha, contenido, tags, imgUrl } = post;

    return (
        <Post
            id={id}  
            titulo={titulo} 
            fecha={fecha} 
            contenido={contenido} 
            tags={tags} 
            imgUrl={imgUrl} />
    )
}

export default PostContainer;