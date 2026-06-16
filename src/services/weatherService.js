export async function searchLocation(query) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    query,
  )}&count=1`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Geocoding request failed')
  const data = await res.json()
  return data.results?.[0] ?? null
}

export async function getWeatherForQuery(query) {
  const loc = await searchLocation(query)
  if (!loc) throw new Error('Location not found')
  const { latitude: lat, longitude: lon } = loc
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
  const r = await fetch(url)
  if (!r.ok) throw new Error('Weather request failed')
  const payload = await r.json()
  return {
    location: loc,
    current: payload.current_weather,
  }
}
