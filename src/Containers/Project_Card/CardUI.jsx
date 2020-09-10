import React from 'react';
// import cardImage from '../Assests/cardImage.jpg';
import './project-card-style.css'

const PCard = props =>{
    return(

        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="CardImage" className="card-img-top"/> 
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.cardTitle}</h4>
                <p className="card-text text-secondary">
                    <div className="50">{props.cardDescription}</div>
                </p>
                
                
                <a href={props.project_url}  className="btn btn-outline-success">{props.cardTitle}</a>
                <a href="#welcome-title" className="btn btn-outline-success">Back to the top</a>
                {/* <a href="http://localhost:3001/" className="btn btn-outline-success">Planet Weather</a> */}
            </div>
        </div>
    );
}

export default PCard;