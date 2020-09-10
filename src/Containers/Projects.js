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
                myImage1={myImage1} 
                firstLink="https://graphql.org/graphql-js/running-an-express-graphql-server/" 
                firstCardTitle="First Card Title" 
                firstText= "Hello"
                h_R_Diagram={H_R_Diagram} 
                secondCardTitle = "The Size of The Universe" 
                secondLink="https://krzysztofmsu.github.io/data-visualization-final-project/jekyll/update/2019/05/05/welcome-to-jekyll.html" 
                secondText="When we look up to the skies, we wonder how vast the universe is. Here we will explore the size of our known universe. First, we will take a look at the International Space Station (ISS), the Earth and the Moon, then we will compare planets with our Sun in our solar system and see the difference in their trajectory around the Sun, we will check the difference between the distance and velocity of other galaxies vs. our Milky Way, and lastly we will see the difference between mass, size, temperature and luminosity of stars."
                projectImage={pythonImage} 
                thirdCardTitle = "Planet Weather" 
                thirdLink="https://anaconda.org/conda-forge/matplotlib"/> 
            
            </div>
        </div>
    )
}