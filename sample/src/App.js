import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="dad-vertical-add">

        </div>
        <div style={{"displaye": "flex"}}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hello ETHIndia 👋🏻
          </p>
        </div>
        <div className="dad-vertical-add">
        </div>
      </header>
    </div>
  );
}

export default App;
