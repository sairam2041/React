import React, { useState } from 'react';
import KanbanCard from './KanbanCard';
import AddCardModal from './AddCardModal';
import '../styles/kanban.css';

type Task = {
    id: string;
    content: string;
};

type ColumnKey = 'todo' | 'inProgress' | 'review' | 'done';

type Columns = {
    [key in ColumnKey]: Task[];
}

const initialColumns: Columns = {
  todo: [{ id: '1', content: '仕様作成' }],
  inProgress: [{ id: '2', content: 'UI設計' }],
  review: [{ id: '3', content: 'コードレビュー' }],
  done: [{ id: '4', content: 'リリース完了' }],
};

const SimpleKanban: React.FC = () => {
  const [columns, setColumns] = useState<Columns>(initialColumns);
  const [showModal, setShowModal] = useState(false);

  const handleAddCard = (content: string) => {
    const newCard: Task = {
      id: Date.now().toString(),
      content,
    };
    setColumns((prev) => ({
      ...prev,
      todo: [...prev.todo, newCard],
    }));
  }

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>, 
    fromColumn: ColumnKey,
    index: number
  ) => {
    e.dataTransfer.setData('fromColumn', fromColumn);
    e.dataTransfer.setData('taskIndex', index.toString());
  };

   const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    toColumn: ColumnKey
   ) => {
    e.preventDefault();
    const fromColumn = e.dataTransfer.getData('fromColumn') as ColumnKey;
    const taskIndex = parseInt(e.dataTransfer.getData('taskIndex'), 10);
    if (!fromColumn || isNaN(taskIndex)) return;

    const task = columns[fromColumn][taskIndex];
    const newColumns = { ...columns };
    newColumns[fromColumn] = [...newColumns[fromColumn]];
    newColumns[toColumn] = [...newColumns[toColumn], task];
    newColumns[fromColumn].splice(taskIndex, 1);

    setColumns(newColumns);
  };

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const columnTitles: { [key in ColumnKey]: string } = {
    todo: 'To Do',
    inProgress: 'In Progress',
    review: 'Review',
    done: 'Done',
  };

  return (
    <div className='kanban-container'>
      <header className='kanban-header'>
        <button className='add-button' onClick={() => setShowModal(true)}>
          + タスク追加
        </button>
      </header>

      <main className='kanban-body'>
        <div className="kanban-board">
          {Object.keys(columns).map((key) => {
            const columnKey = key as ColumnKey;
            return (
              <div
                key={columnKey}
                className="kanban-column"
                onDragOver={allowDrop}
                onDrop={(e) => handleDrop(e, columnKey)}
              >
                <h2 className="kanban-title">{columnTitles[columnKey]}</h2>
                {columns[columnKey].map((task, index) => (
                  <KanbanCard
                    key={task.id}
                    content={task.content}
                    onDragStart={(e) => handleDragStart(e, columnKey, index)}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </main>

      {showModal && (
        <AddCardModal 
          onAdd={handleAddCard}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default SimpleKanban;