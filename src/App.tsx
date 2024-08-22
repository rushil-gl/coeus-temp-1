import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import RoutesHub from './pages/RoutesHub';
import ThemeToggle from './components/common/ThemeToggle.component';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <h1 className="text-2xl text-center text-black dark:text-white">==== Header ====</h1>
      <div className="flex justify-end">
      <ThemeToggle />
      </div>
      <ul className="text-center">
        <li>
          <Link className="font-medium text-blue-600 dark:text-white hover:underline" to="/">Home</Link>
        </li>
        <li>
          <Link className="font-medium text-blue-600 dark:text-white hover:underline" to="/about">About</Link>
        </li>
        <li>
          <Link className="font-medium text-blue-600 dark:text-white hover:underline" to="/documents">Documents</Link>
        </li>
        <li>
          <Link className="font-medium text-red-600 hover:underline" to="/xyz">Error Page</Link>
        </li>
      </ul>
      <hr />
      <RoutesHub />
    </div>
  );
}

export default App;
