import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import "../styles/footer.css"

const FOOTER = () => {


    return (
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
                <a href="https://www.facebook.com/rishabh.passi.9/"><FaFacebook className="icon" /></a>
                <a href="https://www.instagram.com/frontend_trend/?hl=en"><FaInstagram className="icon" /></a>
                <a href="https://www.linkedin.com/in/rishabh-passi-3a9536224/"><FaLinkedin className="icon" /></a>
                <a href="https://github.com/rishabhpassi"><FaGithub className="icon" /></a>

            </div>
            <div className="copyright">
                <span>&copy;Rishabh{new Date().getFullYear()}</span>

            </div>




        </div>
    )

}
export default FOOTER