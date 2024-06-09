import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=" w-full h-screen  p-4 bg-gray-100 dark:bg-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-700 dark:text-gray-200">
      <div className="mb-2 md:mb-0 text-center md:text-left">
        <p>&copy; 2024 All Rights Reserved.</p>
      </div>
      <div className="mb-2 md:mb-0 text-center">
        <p>Made by Freud Ovando Lara | Contacto: freud5310@gmail.com</p>
      </div>
      <div className="text-center md:text-right">
        <p>Other Apps</p>
        <div className="flex justify-center md:justify-end space-x-4 mt-2">
          <a href="https://pokedexappfreud.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">
            PokedexApp
          </a>
          <a href="https://rickandmortyapplocationfreud.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">
            Rick and Morty App
          </a>
          <a href="https://weather-app-freud.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-pink-500 dark:text-pink-300">
            Weather App
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
