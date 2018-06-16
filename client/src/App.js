import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './App.css';
import Table from './components/Table';

const App = () => (
  <div>
    <Navbar />
    <div className='container'>
      <Main />
      <Table />
    </div>
  </div>
)

export default App;
