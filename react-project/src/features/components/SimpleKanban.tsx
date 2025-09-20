import React, { useState } from 'react';
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
              <div
                key={task.id}
                className="kanban-task"
                draggable
                onDragStart={(e) => handleDragStart(e, columnKey, index)}
              >
                {task.content}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SimpleKanban;