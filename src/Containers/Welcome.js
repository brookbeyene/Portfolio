import React from 'react';
import Project from './Projects';
import Contact from './Contact';
import Blog from './Blog';
import About from './About';
import '../CSS_Containers/Welcome.css'
import * as ReactBootstrap from "react-bootstrap";


export default function Welcome(){
    return(
        <div className="welcome">
            
            <div className="menu-bar top">
                <ReactBootstrap.ButtonGroup aria-label="Basic example">
                    <ReactBootstrap.Button variant="secondary" className="btn btn-outline-success" id="welcome-title">
                        <h2>
                            <a href="#welcome-title" style={{color: "#1a0000"}}>  Home  </a>
                        </h2>
                    </ReactBootstrap.Button>
                    <ReactBootstrap.Button variant="secondary"className="btn btn-outline-success">
                        <h2>
                            <a href="#welcome-about" style={{color: "#1a0000"}}>  About  </a>
                        </h2>
                    </ReactBootstrap.Button>
                    <ReactBootstrap.Button variant="secondary" className="btn btn-outline-success">
                        <h2>
                            <a href="#welcome-project" style={{color: "#1a0000"}}>  Project  </a>
                            </h2></ReactBootstrap.Button>
                    <ReactBootstrap.Button variant="secondary" className="btn btn-outline-success">
                        <h2>
                            <a href="#welcome-blog" style={{color: "#1a0000"}}>  Blog  </a>
                        </h2>
                    </ReactBootstrap.Button>
                    <ReactBootstrap.Button variant="secondary" className="btn btn-outline-success">
                        <h2>
                            <a href="#welcome-contact" style={{color: "#1a0000"}}>  Contact  </a>
                            </h2>
                    </ReactBootstrap.Button>
                </ReactBootstrap.ButtonGroup>
                {/* <h2 className="menu-bar pageTitle"><a href="#welcome-title">Home</a></h2>
                <div className="menu-bar about"><h2><a href="#welcome-about">About</a></h2></div>*/}
            </div>
            <div className="welcom-pages">
                {/* <div className="welcome welcome-div">
                <h1 className="pageTitle" id="welcome-title">Welcome</h1>
                
                </div> */}
                
                <div className="welcome about" id="welcome-about"><About/> </div>
                <div className='welcome project' id="welcome-project"><Project/> </div>
                <div className='welcome blog' id="welcome-blog"><Blog/> </div>
                <div className='welcome contact'id="welcome-contact"><Contact/> </div>
            </div>
            
        </div>

    )
}