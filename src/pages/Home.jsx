import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import { getWeatherForQuery } from '../services/weatherService'

export default function Home() {
  const [q, setQ] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSearch(query) {
    setQ(query)
    setError(null)
    setLoading(true)
    try {
      const res = await getWeatherForQuery(query)
      setData(res)
    } catch (err) {
      setError(err.message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-white dark:bg-gray-900">
      <div className="w-full container-max mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">Whether App</h1>
        <SearchBar onSearch={handleSearch} />

        <div className="mt-6 space-y-4">
          {loading && <div className="text-center">Loading…</div>}
          {error && <div className="text-center text-red-500">{error}</div>}
          {data && <WeatherCard data={data} />}
        </div>
      </div>
    </main>
  )
}
