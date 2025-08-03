import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import type { ThemeType } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="bg-primary fixed w-[99%] top-0 left-0 right-0 h-[7rem] mt-[-1rem] px-6 shadow-md bg-opacity-80 backdrop-blur z-50 flex justify-between items-center dark:bg-gray-900">
      <h1 className="text-xl font-bold text-white">🎨🖌️ MultiTheme App</h1>

      <nav className="flex gap-[3rem]  items-center mr-[3rem]">
        <Link
          to="/"
          className="px-3 text-xl py-1 bg-white rounded hover:bg-gray-100 transition no-underline"
        >
            
         <strong> Home</strong>
        </Link>
        <Link
          to="/about"
          className="px-3 text-xl font-bold py-1 bg-white rounded hover:bg-gray-100 transition no-underline"
        >
         <strong>About</strong> 
        </Link>
        <Link
          to="/contact"
          className="px-3 py-1 text-xl font-bold bg-white rounded hover:bg-gray-100 transition no-underline"
        >
          <strong>Contact</strong>
        </Link>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as ThemeType)}
          className="w-[150px] h-[28px] px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm dark:bg-gray-800 dark:text-white"
        >
          <option className='bold' value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
