import React from 'react'

const Footer = () => (
  <footer className="bg-white dark:bg-gray-800 border-t mt-8">
    <div className="container py-6 text-center text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} RAPH Task Manager. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
