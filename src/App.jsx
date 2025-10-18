import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import TaskManager from './components/TaskManager'
import PostsList from './components/PostsList'
import Card from './components/Card'

function Home() {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold">Welcome to RAPH Task Manager</h2>
        <p className="text-gray-600 dark:text-gray-300">Manage your tasks and explore demo posts.</p>
      </Card>

      <TaskManager />
    </div>
  )
}

function NotFound() {
  return (
    <Card>
      <h2 className="text-xl font-bold">404 — Not Found</h2>
      <p className="text-gray-600 dark:text-gray-300">The page you requested does not exist.</p>
    </Card>
  )
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
  )
}