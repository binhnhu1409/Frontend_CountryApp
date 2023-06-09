import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Acountry from './pages/ACountry'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/country/:name" component={Acountry} />
  </Switch>
)
export default Routes
