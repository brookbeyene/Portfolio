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
    <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    <div className="50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsum corporis inventore eaque dolor placeat enim incidunt quis at! Ullam ab soluta repellendus molestiae asperiores qui sapiente quibusdam fugiat similique.</div>

                </p>
                <a href="https://krzysztofmsu.github.io/data-visualization-final-project/jekyll/update/2019/05/05/welcome-to-jekyll.html" className="btn btn-outline-success">Go An</a>
                <a href="#welcome-title" className="btn btn-outline-success">to top</a>
                <a href="http://localhost:3001/" className="btn btn-outline-success">Planet Weather</a>
            </div>
        </div>
    );
}

export default PCard;