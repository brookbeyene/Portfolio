import React from 'react';
import '../CSS_Containers/Project.css'
import Cards from './Project_Card/Cards.jsx'
import * as ReactBootstrap from "react-bootstrap";
import {Accordion, Card, Button} from "react-bootstrap";
import pythonImage from '../Containers/Assests/pythonImage.jpg';
import H_R_Diagram from '../Containers/Assests/H_R_Diagram.jpg';

export default function Project(){
    return(
        <div className="project body">
            <h1 className="pageTitle project">Projects</h1>
            
            {/* <button className="btn btn-primary" data-toggle="collapse" data-target="#content">Python</button>
            <div className="collapse" id="content"><Cards /></div> */}
            
            {/* <ReactBootstrap.ButtonGroup aria-label="Basic example">
            <ReactBootstrap.Button variant="secondary">All</ReactBootstrap.Button>
            <ReactBootstrap.Button variant="secondary">Python</ReactBootstrap.Button>
            <ReactBootstrap.Button variant="secondary">Rails</ReactBootstrap.Button>
            <ReactBootstrap.Button variant="secondary">React</ReactBootstrap.Button>
            <ReactBootstrap.Button variant="secondary">JavaScript</ReactBootstrap.Button>
            <ReactBootstrap.Button variant="secondary">Node.js</ReactBootstrap.Button>
            </ReactBootstrap.ButtonGroup> */}
            
            
            <div className="project-card">

            <Cards 
                projectImage={pythonImage} projectLink="https://krzysztofmsu.github.io/data-visualization-final-project/jekyll/update/2019/05/05/welcome-to-jekyll.html" 
                h_R_Diagram={H_R_Diagram} projectLink="https://krzysztofmsu.github.io/data-visualization-final-project/jekyll/update/2019/05/05/welcome-to-jekyll.html"/>
            
            </div>
        </div>
    )
}