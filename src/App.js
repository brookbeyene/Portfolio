import React from 'react';
import './App.css';
import Welcome from './Containers/Welcome';
import myImage1 from './Containers/Assests/myImage1.jpg'
function App() {
  return (
    <div className="App">
      
      <div className="App-page">
        <div className="myImage"> 
          <img className="my-Image" src={myImage1}/>
        </div>
        <div className="welcome-div">
          <Welcome />
        </div>
        
      </div>
    </div>
  );
  
}

export default App;
