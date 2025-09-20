import React, { useState } from 'react';
import '../styles/kanban.css';

type KanbanItem = {
    id: string;
    content: string;
};

const initialItems: KanbanItem[] = [
    { id: '1', content: 'タスクA' },
    { id: '2', content: 'タスクB' },
    { id: '3', content: 'タスクC' },
];

const SimpleKanban: React.FC = () => {
  const [items, setItems] = useState<KanbanItem[]>(initialItems);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('dragIndex', index.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    const dragIndex = parseInt(e.dataTransfer.getData('dragIndex'), 10);
    if (isNaN(dragIndex)) return;

    const newItems = [...items];
    const [draggedItem] = newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    setItems(newItems);
  };

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="kanban-container">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="kanban-item"
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={allowDrop}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default SimpleKanban;