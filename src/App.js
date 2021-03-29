import React from 'react'
import SearchInput from './components/SearchInput'
import WeatherTable from './components/WeatherTable'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
        <WeatherTable />
      </header>
    </div>
  )
}

export default App
