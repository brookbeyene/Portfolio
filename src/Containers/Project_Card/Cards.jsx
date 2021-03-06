import React,{Component} from 'react';
import PCard  from './CardUI';
// import cardImage from '../Assests/cardImage.jpg';
// import H_R_Diagram from '../Assests/H_R_Diagram.jpg';
// import myImage1 from '../Assests/myImage1.jpg';
// import pythonImage from '../Assests/pythonImage.jpg';
// import {Accordion, Card, Button} from "react-bootstrap";


export default function Cards(props) {
    
        return(
             <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <PCard imgsrc={props.myImage1} project_url={props.firstLink} cardTitle ={props.firstCardTitle} cardDescription ={props.firstText}/>
                    </div>   
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <PCard imgsrc={props.h_R_Diagram} project_url={props.secondLink} cardTitle ={props.secondCardTitle} cardDescription ={props.secondText}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <PCard imgsrc={props.projectImage} project_url={props.thirdLink} cardTitle ={props.thirdCardTitle} cardDescription ={props.thirdText}/>
                    </div>
                </div>
            </div> 
        )
}
