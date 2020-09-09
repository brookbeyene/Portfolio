import React from 'react';
import './App.css';
import Welcome from './Containers/Welcome';
import myImage1 from './Containers/Assests/myImage1.jpg'
function App() {
  return (
    <div className="App">
      <div className="App-page">
        <img src={myImage1}/>
        <Welcome />
      </div>
    </div>
  );
  
}

export default App;
