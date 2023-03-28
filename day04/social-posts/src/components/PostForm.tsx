import { useState } from 'react';
import { Post } from '../types';

interface Props {
    onSubmitForm: (post: Post) => void;
}

const PostForm = ({ onSubmitForm }: Props) => {
    const [showCreateThought, setShowCreateThought] = useState(false);
    return (
        <div className='PostForm-prompt'>
            <button>Create Post</button>
            <div className={`modal postform-modal ${(!showCreateThought) && 'hidden'}`}>

            </div>
        </div>
    )
};

export default PostForm;
