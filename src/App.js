import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AuthPage from './pages/AuthPage'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={AuthPage} />
      </Switch>
    </div>
  )
}

export default App
