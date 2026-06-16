import { useState } from 'react'

export default function SearchBar({ onSearch, placeholder = 'City or place' }) {
  const [q, setQ] = useState('')

  return (
    <form
      className="w-full max-w-xl mx-auto"
      onSubmit={(e) => {
        e.preventDefault()
        const t = q.trim()
        if (t) onSearch(t)
      }}
    >
      <div className="flex gap-3 items-center">
        <label className="sr-only">Search</label>
        <div className="relative flex-1">
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
          </svg>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder={placeholder}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md transition"
        >
          Search
        </button>
      </div>
    </form>
  )
}
