import React from 'react';
import '../styles/KanbanCard.css'

type KanbanCardProps = {
    content: string;
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
};

const KanbanCard: React.FC<KanbanCardProps> = ({ content, onDragStart }) => {
    return (
        <div 
        className='Kanban-task'
        draggable
        onDragStart={onDragStart}
        >
            {content}
        </div>
    );
};

export default KanbanCard;