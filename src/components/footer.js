import React from "react"

import { faFacebook, faInstagram, faFacebookSquare, faInstagramSquare,   } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Footer(){
return(
<footer style={{
  textAlign: `center`,
  padding:`1rem`,
      
      position: `absolute`,
      bottom: `0`,
      width:`100%`,
    }}>
© {new Date().getFullYear()}, {` `} <span>Yoga4MSD</span>
<span style={{color:`rgb(5, 5, 16)`}}> <FontAwesomeIcon icon={faFacebook } size="2x"/>{` `}<FontAwesomeIcon icon={faEnvelope} size="2x"/>{` `}<FontAwesomeIcon icon={faInstagramSquare} size="2x"/>{` `}<FontAwesomeIcon icon={faFacebookSquare} size="2x"/></span>
</footer>


)
}



