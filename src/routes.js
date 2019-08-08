import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing'
import Transfer from './components/Transfer/Transfer'

export default (
    <Switch>
        <Route component={Landing} exact path={'/'}/>
        <Route component={Dashboard} path={'/dashboard'}/>
        <Route component={Transfer} path={'/transfer'}/>
    </Switch>
)