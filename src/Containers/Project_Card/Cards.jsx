import React,{Component} from 'react';
import PCard  from './CardUI';
import cardImage from '../Assests/cardImage.jpg';
import H_R_Diagram from '../Assests/H_R_Diagram.jpg';
import pythonImage from '../Assests/pythonImage.jpg';
import {Accordion, Card, Button} from "react-bootstrap";


export default class Cards extends Component{
    render(){
        return(
            <div className="accordion-project" id="project-all">
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Python
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4">
                                <PCard imgsrc={H_R_Diagram} />
                            </div>
                        </div>
                    </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Python
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4">
                                <PCard imgsrc={pythonImage} />
                            </div>
                            
                        </div>
                    </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
            
                    </Accordion>
            </div>
        )
    }
}