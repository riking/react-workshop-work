import { useState } from 'react';
import { Post } from '../types';
import './PostForm.css';

interface Props {
    modalVisible: boolean;
    onSubmitForm: (post: Post) => void;
    onClose: () => void;
}

const PostForm = ({ modalVisible, onSubmitForm, onClose }: Props) => {
    return (
        <>
            {/* unfortunately, modalVisible && 'hidden' creates 'false' classes */}
            <div className={`modal-backdrop ${(!modalVisible) ? 'hidden' : ''}`}></div>
            <div className={`modal postform-modal ${(!modalVisible) ? 'hidden' : ''}`}>
                <div className='modal-outer-container'><div className='modal-middle-container'><div className='modal-inner-container'>
                    <button className='modal-close' onClick={onClose}>x</button>
                    <h1>Write your thought</h1>
                    <p>Title</p>
                    <input type="string"></input>
                    <p>Thought</p>
                    <textarea></textarea>
                    <button>Save</button>
                </div></div></div>
            </div>
        </>
    )
};

export default PostForm;
