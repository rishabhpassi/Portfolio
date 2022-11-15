import "../logo.css";
import Navbar from "./navbar";
import { HashLink } from "react-router-hash-link";



const Logo = () => {
 return(
     <>
     
     <HashLink smooth to= "#top">
    <section className="logo">
        <div class="box one">R</div>
        <div class="box one">I</div>
        <div class="box one">S</div>
        <div class="box one">H</div>
        <div class="box one">A</div>
        <div class="box one">B</div>
        <div class="box one">H</div>
    </section>
    </HashLink>
    
    <div>
    </div>
  

     </>
     
 )
}
export default Logo