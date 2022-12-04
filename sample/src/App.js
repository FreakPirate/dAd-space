import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App(props) {
  useEffect(() => {
    if (props?.userId?.includes('0x')) {
      console.log('Done')
    }
    // Update the document title using the browser API
  },[props?.userId]);
  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <div style={{"display": "flex", "alignItems" : "center"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png?20220831120339" alt='user' height='40px'></img>
        <button className="login-button">{props.userId}</button>
        </div>

      </header>
      <div className="mainBody">
        <div id="dad-vertical-add">
          <img src='https://dad-space.s3.ap-south-1.amazonaws.com/Variant-1_800x16001670084659339.png'></img>

        </div>
        <div style={{"displaye": "flex"}}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hello ETHIndia 👋🏻
          </p>
        </div>
        <div id="dad-vertical-add">
          <img src="https://dad-space.s3.ap-south-1.amazonaws.com/Variant-1-copy-1_800x16001670084686480.png"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
