import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from  './Home';
import About from './About';
import Login from './Login';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component= { Home } />
            <Route exact path='/about' component= { About } />
            <Route exact path='/login' component= { Login } />
        </Switch>
    </main>
)

export default Main;