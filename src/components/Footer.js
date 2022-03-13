import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <footer>
                <FontAwesomeIcon icon={faTwitterSquare} />
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faInstagramSquare} />
                <FontAwesomeIcon icon={faGithubSquare} />
            </footer>
        </> 
    );
}