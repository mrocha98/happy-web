import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './pages/landing'
import Map from './pages/map'
import NotFound from './pages/not-found'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/map" component={Map} />
      <Route path="**" component={NotFound} />
    </Switch>
  )
}

export default Routes
