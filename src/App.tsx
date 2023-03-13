import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import HeaderInfos from './components/header/headerInfos';
const {useState, useEffect, useRef} = React;

function App() {

  const App = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <Header dataValue={HeaderInfos}/>
      </header>
    </div>
  );
}

export default App;
