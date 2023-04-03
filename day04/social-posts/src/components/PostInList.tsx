import {Post} from '../types';
import './PostInList.css';

interface Props {
    post: Post;
    onDelete: () => void;
}

const PostInList = ({post, onDelete}: Props) => {
  return (
    <div className='PostInList'>
      <button className="delete" onClick={onDelete}><i className="fa-solid fa-trash-can"></i></button>
        <h1>{post.title}</h1>
        <p>{post.thought}</p>
    </div>
  )
};

export default PostInList;
