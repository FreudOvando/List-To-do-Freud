import React, { useState } from 'react';

interface WelcomeScreenProps {
  onNameSubmit: (name: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNameSubmit }) => {
  const [name, setName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name);
    }
  };

  return (
    
    <div className="ml-auto mr-auto bg-slate-400 min-w-[24rem] max-w-[45rem] h-[25rem] mt-[10rem] font-mono text-2xl rounded-3xl shadow-2xl shadow-slate-500">
      <h1 className='text-3xl m-2 pt-2 p-2 text-center '>To-Do List App</h1>
      <p className='font-mono text-wrap m-2 p-2 text-center'>Welcome! please enter your name</p>
      <form className='flex flex-col m-2 p-2 rounded-xl h-[15rem]' onSubmit={handleSubmit}>
        <input 
        className='m-6 p-4 text-center rounded-2xl bg-slate-200 '
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name" 
        />
        <button className='m-4 p-4 hover:bg-slate-600 rounded-lg bg-slate-500' type="submit">Go!</button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
