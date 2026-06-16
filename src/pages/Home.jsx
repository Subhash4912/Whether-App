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
    <main className="py-12 px-4 container-max mx-auto">
      <h1 className="text-4xl font-semibold mb-6">Whether App</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="mt-6 space-y-4">
        {loading && <div className="text-center">Loading…</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
        {data && <WeatherCard data={data} />}
      </div>
    </main>
  )
}
