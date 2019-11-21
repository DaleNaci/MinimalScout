import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Minimal Scout</h1>
        <div class="md-form active-cyan-2 mb-3 mt-0">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
        </div>
        <button type="button" className="btn btn-primary">Search</button>
    </div>
  );
}

export default App;
