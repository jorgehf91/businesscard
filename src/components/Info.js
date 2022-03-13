import React from "react";
import profilePic from "../images/profile-pic.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <div className="info--container">
            <img src={profilePic} alt="profile" className="info--profile-pic" />
            <h1 className="info--name">Jorge Hurtado</h1>
            <h3 className="info--spec">Frontend Developer</h3>
            <p className="info--website">jorgehtado.website</p>
            <div className="info--buttons-container">
                <button className="info--email"> <FontAwesomeIcon icon={faEnvelope} />  Email</button>
                <button className="info--linkedin"> <FontAwesomeIcon icon={faLinkedin} />  LinkedIn</button>    
            </div>
            
        </div>      
    )
}