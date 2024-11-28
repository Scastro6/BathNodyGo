import { useState } from 'react';

import postFuncs from '../../data/posts.js';

const NewPost = () => {

    const today = (new Date()).toDateString()

    const postDefault = {
        id: 0,
        titulo: "",
        fecha: today,
        contenido: "",
        imgUrl: "",
        tags: ["george", "got"]
    }

    const [post, setPost] = useState(postDefault);
    const [ postCreado, setPostCreado] = useState(false)

    const handleSubmit = () => {
        console.log(post);
        postFuncs.addPost(post);
        setPostCreado(true);
    }

    return (
        <section>
            { !postCreado && <>
                <h2>Crear nuevo post</h2>
                <label>Titulo</label>
                <br/>
                <input type="text" placeholder="Título..." name="Titulo" 
                    value={post.titulo} onChange={ (e) => setPost({ ...post, titulo: e.target.value }) } />
                <br/><br/>
                <label>Fecha</label>
                <br/>
                <input type="text" placeholder="Fecha..." name="fecha"
                    value={post.fecha} readOnly />
                <br/><br/>
                <label>Contenido</label>
                <br/>
                <textarea placeholder="Contenido..." name="contenido" rows="4" cols="50"
                    value={post.contenido} onChange={(e) => setPost({...post, contenido: e.target.value })}> 
                </textarea>
                <br/><br/>
                <label>Url de Imagen</label>
                <br/>
                <input type="text" placeholder="Url de Imagen" name="imgUrl"
                    value={post.imgUrl} onChange={(e) => setPost({...post, imgUrl: e.target.value})} />
                <br/><br/>
                <label>Tags</label>
                <br/>
                <input type="text" placeholder="Tags" name="tags"
                    value={post.tags.join(',')} onChange={(e) => setPost({...post, tags: e.target.value.split(',')})}/>
                <br/><br/>
                <button onClick={ () => handleSubmit() }>Crear Post</button>
            </>
            }
            {postCreado && <div>
                ¡Post Creado!
                <br/><br/>
                <a href="/">Volver al inicio</a>    
            </div>}

        </section>


    )
}

export default NewPost;