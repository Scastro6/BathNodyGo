import { useParams } from 'react-router-dom';
import PostContainer from '../../components/MainArticles/Post/PostContainer'


const PostPage = () => {

    const params = useParams();

    const id = params.id;

    return(
        <PostContainer id={id} />
    )   
}

export default PostPage;