import React from 'react';
import Project from './Projects';
import Contact from './Contact';
import Blog from './Blog';
import About from './About';
import '../CSS_Containers/Welcome.css'

export default function Welcome(){
    return(
        <div className="welcome">
            <div className="menu-bar top">
                <h2 className="menu-bar pageTitle"><a href="#welcome-title">Home</a></h2>
                <div className="menu-bar about"><h2><a href="#welcome-about">About</a></h2></div>
                <div className='menu-bar project'><h2><a href="#welcome-project">Project</a></h2> </div>
                <div className='menu-bar blog'><h2><a href="#welcome-blog">Blog</a></h2> </div>
                <div className='menu-bar contact'><h2><a href="#welcome-contact">Contact</a></h2></div>
            </div>
            <div className="welcom-pages">
                <div className="welcome welcome-div">
                <h1 className="pageTitle" id="welcome-title">Welcome</h1>
                
                </div>
                
                <div className="welcome about" id="welcome-about"><About/> </div>
                <div className='welcome project' id="welcome-project"><Project/> </div>
                <div className='welcome blog' id="welcome-blog"><Blog/> </div>
                <div className='welcome contact'id="welcome-contact"><Contact/> </div>
            </div>
            
        </div>

    )
}