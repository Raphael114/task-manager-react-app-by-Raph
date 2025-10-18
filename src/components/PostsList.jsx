import React, { useEffect, useState } from 'react'
import Card from './Card'

const PAGE_SIZE = 10

const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setPosts(data)
      })
      .catch((err) => !cancelled && setError(err.message || 'Error'))
      .finally(() => !cancelled && setLoading(false))

    return () => {
      cancelled = true
    }
  }, [])

  const filtered = posts.filter((p) => p.title.includes(query) || p.body.includes(query))
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  if (loading) return <Card>Loading posts...</Card>
  if (error) return <Card>Error: {error}</Card>

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1) }} placeholder="Search posts..." className="flex-grow px-3 py-2 border rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visible.map((post) => (
          <Card key={post.id}>
            <h3 className="font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{post.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">Page {page} / {totalPages}</div>
        <div className="flex gap-2">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-3 py-1 bg-gray-200 rounded">Prev</button>
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="px-3 py-1 bg-gray-200 rounded">Next</button>
        </div>
      </div>
    </div>
  )
}

export default PostsList
