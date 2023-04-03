import { clear } from 'console';
import { FormEvent, useState } from 'react';
import { Post } from '../types';
import './PostForm.css';

interface Props {
    modalVisible: boolean;
    onSubmitForm: (post: Post) => void;
    onClose: () => void;
}

const PostForm = ({ modalVisible, onSubmitForm, onClose }: Props) => {
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');
    const clearForm = () => {
        setTitle('');
        setThought('');
    }
    const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const post: Post = { title, thought };
        onSubmitForm(post);
        clearForm();
    };

    return (
        <>
            {/* unfortunately, modalVisible && 'hidden' creates 'false' classes */}
            <div className={`modal-backdrop ${(!modalVisible) ? 'hidden' : ''}`}></div>
            <div className={`modal postform-modal ${(!modalVisible) ? 'hidden' : ''}`}>
                <div className='modal-outer-container'><div className='modal-middle-container'><div className='modal-inner-container'>
                    <form onSubmit={onSubmit}>
                    <button className='modal-close' onClick={() => { onClose(); clearForm(); }}><i className="fa-solid fa-xmark"></i></button>
                    <h1>Write your thought</h1>
                    <p>Title</p>
                    <input type="string" name="title" value={title} onChange={e => setTitle(e.target.value)}></input>
                    <p>Thought</p>
                    <textarea name="thought" value={thought} onChange={e => setThought(e.target.value)}></textarea>
                    <button type="submit">Add Post</button>
                    </form>
                </div></div></div>
            </div>
        </>
    )
};

export default PostForm;
