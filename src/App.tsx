import './App.css';
import Header from './components/header/header';
import HeaderInfos from './components/header/headerInfos';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header dataValue={HeaderInfos}/>
      </header>
      <body>
        <div className="App-body">
          
        </div>
      </body>
    </div>
  );
}

export default App;
