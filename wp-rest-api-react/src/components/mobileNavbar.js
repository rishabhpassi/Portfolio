
import React from "react"
import {FaHome,FaProjectDiagram} from "react-icons/fa"
import {GrStackOverflow} from "react-icons/gr"
import {SiAboutdotme} from "react-icons/si"
import { HashLink } from "react-router-hash-link"
import "../styles/mobile.css"

const MobileNavbar = () => {
 return(
     <div className="bottom-navbar">
         <HashLink smooth to="#top">
             <FaHome className="icons"/>
             <span className="hover-text">Home</span>
        </HashLink>

        <HashLink smooth to="./#skills">
             <GrStackOverflow className="icons"/>
             <span className="hover-text">Skills</span>

        </HashLink>

        <HashLink smooth to="./#Projects">
             <FaProjectDiagram className="icons"/>
             <span className="hover-text">Projects</span>

        </HashLink>
        <HashLink smooth to="./#about">
             <SiAboutdotme className="icons"/>
             <span className="hover-text">About</span>

        </HashLink>    


   </div>
 )
} 
export default MobileNavbar