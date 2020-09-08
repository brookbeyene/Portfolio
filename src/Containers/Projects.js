import React from 'react';
import '../CSS_Containers/Project.css'
import Cards from './Project_Card/Cards.jsx'
import * as ReactBootstrap from "react-bootstrap";
import {Accordion, Card, Button} from "react-bootstrap";

export default function Project(){
    return(
        <div className="project body">
            <h1 className="pageTitle project">Projects</h1>
          
            {/* <div className="project-menu-bar project">
                <div className="project-menu-bar all"><a href="#"><h3>All</h3></a></div>
                <div className="project-menu-bar all"><a href="#"><h3>Python</h3></a></div>
                <div className="project-menu-bar all"><a href="#"><h3>Rails</h3></a></div>
                <div className="project-menu-bar all"><a href="#"><h3>React</h3></a></div>
                <div className="project-menu-bar all"><a href="#"><h3>JavaScrip</h3></a></div>
                <div className="project-menu-bar all"><a href="#"><h3>Node.js</h3></a></div>

            </div> */}
            <ReactBootstrap.ButtonGroup aria-label="Basic example">
            <ReactBootstrap.Button variant="secondary">All</ReactBootstrap.Button>
            <ReactBootstrap.Button variant="secondary">Python</ReactBootstrap.Button>
            {/* <ReactBootstrap.Button variant="secondary" className="btn btn-primary" data-toggle="collapse" data-target="#content">Python</ReactBootstrap.Button> */}
            {/* <div className="collapse" id="content"><Cards /></div> */}
            <ReactBootstrap.Button variant="secondary">Rails</ReactBootstrap.Button>
            <ReactBootstrap.Button variant="secondary">React</ReactBootstrap.Button>
            <ReactBootstrap.Button variant="secondary">JavaScript</ReactBootstrap.Button>
            <ReactBootstrap.Button variant="secondary">Node.js</ReactBootstrap.Button>
            </ReactBootstrap.ButtonGroup>

            <Cards />
            
        </div>
    )
}