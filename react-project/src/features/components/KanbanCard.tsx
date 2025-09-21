import React from 'react';
import '../styles/KanbanCard.css'

type KanbanCardProps = {
    content: string;
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
    onDoubleClick: () => void;
};

const KanbanCard: React.FC<KanbanCardProps> = ({ content, onDragStart, onDoubleClick }) => {
    return (
        <div 
          className='Kanban-task'
          draggable
          onDragStart={onDragStart}
          onDoubleClick={onDoubleClick}
        >
          {content}
        </div>
    );
};

export default KanbanCard;