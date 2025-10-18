Raph Task Manager



Raph Task Manager is a modern, responsive task management web app built with React, React Router, and Tailwind CSS. It provides an intuitive interface for managing daily tasks and viewing demo posts, designed with scalability and clean architecture in mind.

Deployment link:   https://task-manager-react-app-by-raph.vercel.app/

🚀 Features
Task Management – Create, view, and organize tasks seamlessly.
Demo Posts – Explore demo content via a PostsList component.
Reusable Components – Modular architecture using Layout, Card, and TaskManager components.
Client-Side Routing – Built with react-router-dom for smooth navigation.
Error Handling – Graceful 404 handling with a custom NotFound component.
Responsive UI – Styled with Tailwind CSS for both light and dark themes.
🧠 Project Structure
src/
├── components/
│   ├── Layout.jsx
│   ├── TaskManager.jsx
│   ├── PostsList.jsx
│   └── Card.jsx
├── App.jsx
├── main.jsx
└── index.css

App.jsx



This is the main application entry point that defines the routing structure.

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import PostsList from './components/PostsList';
import Card from './components/Card';

function Home() {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold">Welcome to RAPH Task Manager</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your tasks and explore demo posts.
        </p>
      </Card>
      <TaskManager />
    </div>
  );
}

function NotFound() {
  return (
    <Card>
      <h2 className="text-xl font-bold">404 — Not Found</h2>
      <p className="text-gray-600 dark:text-gray-300">
        The page you requested does not exist.
      </p>
    </Card>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

🧩 Tech Stack
Frontend Framework: React 18+
Routing: React Router DOM v6+
Styling: Tailwind CSS
Build Tool: Vite
Deployment: Vercel / Netlify compatible
⚙️ Installation

Clone the repository

git clone https://github.com/yourusername/raph-task-manager.git
cd raph-task-manager


Install dependencies

npm install


Run the development server

npm run dev


Build for production

npm run build


Preview the production build

npm run preview

🧪 Testing



You can integrate Jest or React Testing Library to ensure component reliability:

npm install --save-dev jest @testing-library/react
npm test

🧱 Environment Variables (Optional)



If your app expands to include APIs, define environment variables in a .env file:

VITE_API_URL=https://api.example.com

🖥️ Deployment:  https://task-manager-react-app-by-raph.vercel.app/ 



For quick deployment, use Vercel:

vercel




Ensure your vite.config.js is correctly configured and your build command is:

npm run build

📜 License



This project is licensed under the MIT License.
Feel free to use and modify it for personal or professional projects.

👨‍💻 Author



Nwamuta Raphael
Software Engineer • Full Stack Developer
GitHub: https://github.com/Raphael114 | LinkedIn:  https://www.linkedin.com/in/nwamuta-raphael-a40242182/ | Portfolio
