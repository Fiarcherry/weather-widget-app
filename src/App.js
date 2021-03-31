import React from 'react'
import SearchInput from './components/SearchInput'
import Tabs from './components/Tabs'
import WeatherTable from './components/WeatherTable'
import { Switch, Route } from 'react-router-dom'
import { TAB_TYPES } from './constants/tabs'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
        <Switch>
          <Route path="/">
            <Tabs activeTab={TAB_TYPES.ALL} />
          </Route>
          <Route path="/all">
            <Tabs activeTab={TAB_TYPES.ALL} />
          </Route>
          <Route path="/active">
            <Tabs activeTab={TAB_TYPES.ACTIVE} />
          </Route>
          <Route path="/deleted">
            <Tabs activeTab={TAB_TYPES.DELETED} />
          </Route>
        </Switch>
        <WeatherTable />
      </header>
    </div>
  )
}

export default App
