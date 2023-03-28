import {Post} from '../types';
import './PostInList.css';

interface Props {
    post: Post;
    onDelete: () => void;
}

const PostInList = ({post, onDelete}: Props) => {
  return (
    <div className='PostInList'>
        <h1>{post.title}</h1>
        <p>{post.thought}</p>
    </div>
  )
};

export default PostInList;
