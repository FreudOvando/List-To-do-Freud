import React from 'react';

interface TodoFormProps {
  name: string;
  newTodo: string;
  setNewTodo: (newTodo: string) => void;
  importance: 'low' | 'medium' | 'high';
  setImportance: (importance: 'low' | 'medium' | 'high') => void;
  handleAddTodo: () => void;
  handleReset: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  name,
  newTodo,
  setNewTodo,
  importance,
  setImportance,
  handleAddTodo,
  handleReset,
}) => {
  return (
    <div className=' font-mono min-w-[24rem] max-w-[54rem] shadow-2xl rounded-2xl mt-10 ml-auto mr-auto'>
      <div className='flex items-center justify-center flex-col'>
        <div className='flex flex-col items-center justify-center m-1 p-1'>
          <h1 className='p-1 m-1 text-3xl'>Welcome, {name}!</h1>
          <h1 className="text-2xl m-1 p-1">To do List</h1>
        </div>
        <input
          className='dark:text-slate-900 text-2xl rounded-xl w-auto text-center shadow-gray-500 mb-2 pb-2'
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Add a new Task'
       
       />
        <h3>Importance level</h3>
        <select
          value={importance}
          onChange={(e) => setImportance(e.target.value as 'low' | 'medium' | 'high')}
          className="hover:bg-[#999] pointer m-2 p-2 text-center text-xl rounded-md shadow-sm shadow-gray-500 mb-2 bg-gray-500 text-white"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          className='hover:bg-slate-500 w-[15rem] h-[3rem] text-xl rounded-2xl shadow-2xl shadow-slate-500 m-4 pb-2'
          onClick={handleAddTodo}
        >
          Add Task
        </button>
        <button onClick={handleReset} className=" m-1 p-1 text-xl font-arial rounded-full hover:bg-slate-500 hover:text-slate-100">
          Exit
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
