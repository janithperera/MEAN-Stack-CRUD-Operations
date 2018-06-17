import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from  './Home';
import About from './About';
import Login from './Login';
import Register from './Register';
import AssignDep from './AssignDepartments';
import AssignDepartments from './AssignDepartments';
import AddEmp from './AddEmp';
import Employee from './Employees';
import EmployeeD from './EmployeeDetails';
import UserMan from './Table';
import UserRe from './ResetForm';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component= { Login } />
            <Route exact path='/about' component= { About } />
            <Route exact path='/home' component= { Home } />
            <Route exact path='/register' component= { Register } />
            <Route exact path='/assigndep' component= { AssignDepartments } />
            <Route exact path='/employee/new' component= { AddEmp } />
            <Route exact path='/employee' component= { Employee } />
            <Route exact path='/usermanagement' component= { UserMan } />
            <Route exact path='/reset' component= { UserRe } />
            <Route exact path='/employee/edit/:id' component= { EmployeeD } />
        </Switch>
    </main>
)

export default Main;