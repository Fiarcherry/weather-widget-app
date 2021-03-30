import React from 'react'
import SearchInput from './components/SearchInput'
import Tabs from './components/Tabs'
import WeatherTable from './components/WeatherTable'
import { Switch, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/all">All</Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/deleted">Deleted</Link>
            </li>
          </ul>
        </nav>
        <SearchInput />
        <Switch>
          <Route path="/all">
            <Tabs activeTab="all" />
          </Route>
          <Route path="/active">
            <Tabs activeTab="active" />
          </Route>
          <Route path="/deleted">
            <Tabs activeTab="deleted" />
          </Route>
        </Switch>
        <WeatherTable />
      </header>
    </div>
  )
}

export default App
