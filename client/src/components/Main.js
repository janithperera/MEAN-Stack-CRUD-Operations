import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from  './Home';
import About from './About';
import Login from './Login';
import Register from './Register';
import AssignDep from './AssignDepartments';
import AssignDepartments from './AssignDepartments';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component= { Home } />
            <Route exact path='/about' component= { About } />
            <Route exact path='/login' component= { Login } />
            <Route exact path='/register' component= { Register } />
            <Route exact path='/assigndep' component= { AssignDepartments } />
        </Switch>
    </main>
)

export default Main;