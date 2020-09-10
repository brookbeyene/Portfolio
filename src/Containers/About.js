import React from 'react';
import '../CSS_Containers/About.css'
import myImage1 from "./Assests/myImage1.jpg"

export default function About(){
    return(
        <div className="about body">
            <img className="about my-Image" src={myImage1}/>
            <h1 className="about pageTitle">About me </h1>
            <p className="about about-me-p" >I am someone who gets inspired by challenges, love learning and is curious. As long as I can remember my passions for Astronomy, physics, and mechanical engineering dictated the life I live. My father was a mechanical engineer so that may have something to do with that part of me. </p>
        </div>
        
    )
}