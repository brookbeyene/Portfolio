import React from 'react';
import '../CSS_Containers/Project.css'
import Cards from './Project_Card/Cards.jsx'
import * as ReactBootstrap from "react-bootstrap";
import pythonImage from '../Containers/Assests/pythonImage.jpg';
import H_R_Diagram from '../Containers/Assests/H_R_Diagram.jpg';
import myImage1 from '../Containers/Assests/cardImage.jpg';


export default function Project(){
    return(
        <div className="project body">
            <h1 className="pageTitle project">Recent Projects</h1>
            
            {/* <button className="btn btn-primary" data-toggle="collapse" data-target="#content">Python</button>
            <div className="collapse" id="content"><Cards /></div> */}
            
            
            
            <div className="project-card">

            <Cards 
                myImage1={myImage1} firstLink="https://google.com" 
                h_R_Diagram={H_R_Diagram} projectLink="https://krzysztofmsu.github.io/data-visualization-final-project/jekyll/update/2019/05/05/welcome-to-jekyll.html"
                projectImage={pythonImage} thirdLink="https://krzysztofmsu.github.io/data-visualization-final-project/jekyll/update/2019/05/05/welcome-to-jekyll.html"/> 
            
            </div>
        </div>
    )
}