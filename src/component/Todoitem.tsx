import { useState } from 'react';
import {Todo} from '../types'


interface TodoItemProps{
    todo: Todo;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
    onToggleComplete: (id: number) => void;
}




const Todoitem: React.FC<TodoItemProps> = ({todo, onDelete, onEdit, onToggleComplete }) => {
  
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.text);
    
    const handleEdit = () => {
        onEdit(todo.id, editText);
        setIsEditing(false);
      };

      const getBackgroundColor = () => {
        switch (todo.importance) {
          case 'low':
            return 'bg-green-300';
          case 'medium':
            return 'bg-yellow-300';
          case 'high':
            return 'bg-red-300 ';
          default:
            return '';
        }
      };

  return (
    <li className={`dark:text-slate-900 flex justify-center items-center p-2 m-2 rounded-lg  ${getBackgroundColor()}`}>
    {
    isEditing ? 
    (
      <div className='flex flex-col font-mono m-2 p-2'>
        <textarea 
        className='text-2xl rounded-2xl text-center font-mono p-1 border w-full resize-none overflow-hidden '
         
          value={editText} 
          onChange={(e) => setEditText(e.target.value)} 
        />
        <button className='m-2 p-2 rounded-lg bg-slate-300 shadow-md shadow-slate-500' onClick={handleEdit}>Save</button>
      </div>
    ) : 
    (
      <div className='flex items-center justify-center flex-col font-mono m-1 p-1 rounded'>
        
        <span className='text-2xl text-center rounded-lg' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
        </span>
        
        <div className='flex flex-row items-center justify-center m-1 p-1'>
      
        <button className='m-2 p-2' onClick={() => setIsEditing(true)}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVNJREFUSEu11c0qRVEYxvGfKMxMlFI+orgElMhHiuIeXIMBI8oAF+EeDDBRvsvIxEQJUQZiZIKB4qxap7Ttw97bOXu61vv83/fpXc+uU+Ovrsb6koA5rKO/IPgSC9gt1ycBD2gvKF4uu0VPJcBnPChq3Y/6pFBWQAu2Ss2s4PDbxFUDzGMTbxjGeYT8G9CMJazGZRjARAQFxr8ATdjGOPYwi0a8VMOiIL6DsSi2jxm8Jzau0ARZxQtZlBQ/xWRK5+VBck+wWPJ5LVYfYRqvvzzE3ICw58ulTQmdT/0hXsiivKmRe4KqA+7RkaIaUnIUT/GsDQcVUvcO3ZXCLsT1BvpSIFcRUh/Fe1PuXMSXXjGu0yxpLT2w49jtDRrQiTDVCJ5/8zFrLAdLTlDu+hpDf4kHcFZAuBsgZ7HbQTxm2YA8gKDXhQ+EP1+mLy8gk+j3SzUHfAGSjEwZjW31YAAAAABJRU5ErkJggg=="/></button>
        <button className='m-2 p-2' onClick={() => onDelete(todo.id)}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKVJREFUSEvtlbERgzAMRZ8LNqFKVmAMhmAI+oyQyw6ZIQPQwx2zUJBzkcA5CAkfTgMubfk/6duWHYmHS6yPBVABdyERv/ZYS1IDFMALyASRAfAxjQQJAeNOln11/w7YqYBJRjqDWKt+9I4B+FQZ2rY0H2XRCVi8+nO/T4sOYNGWBmh+aC1w2aIMdMA13CM1uxK4AbkR0gM18LQCjLp6mPYn6wpKxBs0qysZAkh0fgAAAABJRU5ErkJggg=="/></button>
        <input 
        className=' w-[1.2rem] h-[1.2rem] m-2 p-2'
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggleComplete(todo.id)} 
      />
        </div>
      
      </div>
    )}
  </li>
  )
}

export default Todoitem