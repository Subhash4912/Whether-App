function weatherCodeToIcon(code) {
  // Simplified mapping for Open-Meteo weathercodes
  const map = {
    0: ['☀️', 'Clear'],
    1: ['🌤️', 'Mainly clear'],
    2: ['⛅', 'Partly cloudy'],
    3: ['☁️', 'Overcast'],
    45: ['🌫️', 'Fog'],
    48: ['🌫️', 'Depositing rime fog'],
    51: ['🌦️', 'Drizzle'],
    53: ['🌦️', 'Drizzle'],
    55: ['🌦️', 'Drizzle'],
    61: ['🌧️', 'Rain'],
    63: ['🌧️', 'Rain'],
    65: ['🌧️', 'Heavy rain'],
    71: ['🌨️', 'Snow'],
    73: ['🌨️', 'Snow'],
    75: ['🌨️', 'Snow'],
    80: ['🌧️', 'Rain showers'],
    81: ['🌧️', 'Rain showers'],
    82: ['⛈️', 'Thunderstorms'],
  }
  return map[code] || ['❔', 'Unknown']
}

export default function WeatherCard({ data }) {
  if (!data) return null
  const { location, current } = data
  const [icon, desc] = weatherCodeToIcon(current.weathercode)

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-white/70 to-indigo-50/60 dark:from-gray-900/70 dark:to-gray-800/60 rounded-2xl p-5 md:p-6 shadow-xl backdrop-blur-sm transition-transform hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl bg-white/80 dark:bg-gray-800/70 flex items-center justify-center text-4xl md:text-5xl shadow-md">
            <span className="animate-bounce inline-block">{icon}</span>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-gray-100">{location.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{location.country}</div>
            </div>

            <div className="text-right">
              <div className="text-5xl md:text-6xl font-extrabold text-indigo-600 dark:text-indigo-300">{Math.round(current.temperature)}°C</div>
              <div className="text-sm text-gray-500 dark:text-gray-300">Wind {current.windspeed} km/h</div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-indigo-100/60 dark:bg-indigo-900/30 rounded-md text-xs">{desc}</span>
            </div>
            <div className="text-xs">Measured: {new Date(current.time).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
