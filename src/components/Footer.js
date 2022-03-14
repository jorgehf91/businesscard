import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <footer>
                <FontAwesomeIcon icon={faTwitterSquare} className="footer--icon twitter" />
                <FontAwesomeIcon icon={faFacebookSquare} className="footer--icon facebook" />
                <FontAwesomeIcon icon={faInstagramSquare} className="footer--icon instagram" /> 
                <FontAwesomeIcon icon={faGithubSquare} className="footer--icon gh"/>
            </footer>
        </> 
    );
}