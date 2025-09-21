import React, { useState } from 'react';
import '../styles/edit-modal.css';

type EditCardModalProps = {
    initialContent: string;
    onSave: (newCOntent: string) => void;
    onClose: () => void;
};

const EditCardModal: React.FC<EditCardModalProps> = ({ initialContent, onSave, onClose }) => {
    const [content, setContent] = useState(initialContent);

    const handleSave = () => {
        if (content.trim()) {
            onSave(content.trim());
            onClose();
        }
    };

    return (
        <div className='edit-modal-overlay'>
            <div className='edit-modal'>
                <h3>タスクを編集</h3>
                <textarea
                 value={content}
                 onChange={(e) => setContent(e.target.value)}
                 placeholder='タスク内容を修正'
                />
                <div className='edit-modal-actions'>
                    <button onClick={handleSave}>保存</button>
                    <button onClick={onClose}>キャンセル</button>
                </div>
            </div>
        </div>
    );
};

export default EditCardModal;