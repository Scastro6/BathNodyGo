import './Post.css';
const Post = ({id, titulo, fecha, contenido, tags, imgUrl}) => {
    return ( 
        <article key={titulo}>
            <h2>
                <a href={`/posts/${id}`}>{titulo}</a>
            </h2>
            <h3>{fecha}</h3>
            <p>
                {contenido}
            </p>
            <img src={imgUrl} />
            <h4>Tags:</h4>
            <p>
            {
                tags.map(tag => <span key={tag}><a href="">{tag}</a>&nbsp;</span> )
            }
            </p>
        </article>
    )
}

export default Post;