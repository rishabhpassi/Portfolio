import React from "react"; 
import{ useState,useEffect } from "react";
import "../styles/scroll.css"
import {FaAngleDoubleUp} from 'react-icons/fa';

const ScrollToSection = () => {
    const [showScrolltoTopButton, setshowScrolltoTopButton] = useState(false);
    useEffect(()=>{
        
            window.addEventListener('scroll',()=>{
                if(window.scrollY > 100){
                    setshowScrolltoTopButton(true)
                    
                }else{
                    setshowScrolltoTopButton(false)
                }
            })
           
    },[])
    const ScrollTop = () => {
        window.scrollTo({
            top:0,
            behaviour:"smooth",
        });
    }
    return(
        <div >
            {
        showScrolltoTopButton &&
        <FaAngleDoubleUp onClick={ScrollTop} className='top-btn-position top-btn-style' />}
        
        </div>
    )
    
  }
  export default ScrollToSection;

  