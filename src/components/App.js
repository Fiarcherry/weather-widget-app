import React, { Fragment } from 'react'
import SearchInput from './SearchInput'
import FilterTabs from './FilterTabs'
import WeatherTable from './WeatherTable'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import { changeTab } from '../redux/actions'
import { TAB_TYPES } from '../constants/tabs'

function App({ changeTab }) {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
        <br />
        <Route
          path="/"
          render={() => (
            <Fragment>
              <FilterTabs />
              <Switch>
                <Route
                  path="/all"
                  render={() => {
                    changeTab(TAB_TYPES.ALL)
                  }}
                />
                <Route
                  path="/active"
                  render={() => {
                    changeTab(TAB_TYPES.ACTIVE)
                  }}
                />
                <Route
                  path="/deleted"
                  render={() => {
                    changeTab(TAB_TYPES.DELETED)
                  }}
                />
              </Switch>
            </Fragment>
          )}
        />
        <br />
        <WeatherTable />
      </header>
    </div>
  )
}

export default connect(null, { changeTab })(App)
