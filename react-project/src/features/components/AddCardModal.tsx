import React, { useState } from 'react';
import '../styles/addCardModal.css';

type AddCardModalProps = {
    onAdd: (content: string) => void;
    onClose: () => void;
};

const AddCardModal: React.FC<AddCardModalProps> = ({ onAdd, onClose }) => {
    const [content, setCOntent] = useState('');

    const handleSubmit = () => {
        if (content.trim()) {
            onAdd(content.trim());
            setCOntent('');
            onClose();
        }
    };

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <h3>新しいタスクを追加</h3>
                <textarea
                    value={content}
                    onChange={(e) => setCOntent(e.target.value)}
                    placeholder='タスク内容を入力'
                />
                <div className='modal-actions'>
                    <button onClick={handleSubmit}>追加</button>
                    <button onClick={onClose}>キャンセル</button>
                </div>
            </div>
        </div>
    );
};

export default AddCardModal;