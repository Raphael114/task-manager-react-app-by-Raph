import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme/ThemeContext'

const Navbar = () => {
  const { theme, toggle } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold">RAPH</Link>
          <Link to="/tasks" className="text-sm text-gray-600 dark:text-gray-300">Tasks</Link>
          <Link to="/posts" className="text-sm text-gray-600 dark:text-gray-300">Posts</Link>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700">{theme === 'dark' ? 'Light' : 'Dark'}</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
