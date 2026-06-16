import { useState } from 'react'

export default function SearchBar({ onSearch, placeholder = 'Enter place or city' }) {
  const [q, setQ] = useState('')

  return (
    <form
      className="flex gap-2 justify-center items-center"
      onSubmit={(e) => {
        e.preventDefault()
        const t = q.trim()
        if (t) onSearch(t)
      }}
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 w-72 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder={placeholder}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Search
      </button>
    </form>
  )
}
