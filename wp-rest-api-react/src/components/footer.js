import {FaFacebook,FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa"
import "../styles/footer.css"

const FOOTER =()=> {


    return(
        <div className="footer-section">
        <div className="headin">
            <p className="p-1">Like what you see? </p>
           <p className="p-2">Lets Get In Touch!</p> 
           
        </div>
        <button className="mail-button">
            <a href="mailto:rishabh.passi199@gmail.com">
            Email Me!
            </a>
        </button>
        <div className="social-media">
            <a href="#" ><FaFacebook className="icon"/></a>
            <a href="#"><FaInstagram className="icon"/></a>
            <a href="#"><FaLinkedin className="icon"/></a>
            <a href="#"><FaGithub className="icon"/></a>
        
        </div>
        <div className="copyright">
            <span>&copy;Rishabh{new Date().getFullYear()}</span>

        </div>

        
        
        
        </div>
    )

}
export default FOOTER