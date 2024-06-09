import React from 'react'
import Todoitem from './Todoitem';
import {Todo} from '../types'



interface TodoListProps {
    todos: Todo[];
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
    onToggleComplete: (id: number) => void;

}


const Todolist: React.FC<TodoListProps> = ({todos, onDelete, onEdit, onToggleComplete }) => {




  return (
    <div className='mx-auto'>
<ul>
    {
        todos.map( todo => (
            <Todoitem
            key={todo.id} 
            todo={todo} 
            onDelete={onDelete}
            onEdit={onEdit}
            onToggleComplete={onToggleComplete}
            />
        ))
    }
</ul>

    </div>
  )
}

export default Todolist