import './Post.css'

export interface PostProps {
    title: string;
    thought: string;
}

const Post = () => {
  return (
    <div className='Post'>
        Post works
    </div>
  )
};

export default Post;
