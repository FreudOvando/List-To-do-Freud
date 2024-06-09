import React, { useState, useEffect } from 'react';
import { Todo } from './types';
import TodoList from './component/Todolist';
import WelcomeScreen from './component/WelcomeScreen';
import TodoForm from './component/TodoForm';
import Header from './component/Header';
import Footer from './component/Footer';


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [importance, setImportance] = useState<'low' | 'medium' | 'high'>('low');
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(savedTodos);

    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const newTask: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
        importance: importance, // Añadir importancia a la tarea
      };
      setTodos([...todos, newTask]);
      setNewTodo('');
      setImportance('low'); // Reiniciar la importancia a 'low'
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const handleToggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleNameSubmit = (name: string) => {
    localStorage.setItem('name', name);
    setName(name);
  };

  const handleReset = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('todos');
    setName(null);
    setTodos([]); 
  };


  if (!name) {

  return <WelcomeScreen onNameSubmit={handleNameSubmit} />;
  
  }

  return (

    <div className='flex items-center justify-center flex-col  gap-2 dark:bg-slate-900 dark:text-slate-300'>
   
    <Header />

    
    <TodoForm
        name={name}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        importance={importance}
        setImportance={setImportance}
        handleAddTodo={handleAddTodo}
        handleReset={handleReset}
      />
    
    
    
    <TodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} onToggleComplete={handleToggleComplete} />
    

<Footer />  
   
    
    
    </div>
  );
};

export default App;
