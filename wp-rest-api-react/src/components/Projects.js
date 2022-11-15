import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { Swiper, SwiperSlide } from "swiper/react";
import ReadMore from './Readmore';
//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay,Keyboard, Pagination, Navigation } from "swiper";
import"../styles/project.css"
import { HashLink } from 'react-router-hash-link';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";



const Projects = ( {featuredImage} ) => {
    const restPath = 'https://rishabhp.in/PORTFOLIO/wp-json/wp/v2/fwd-project?_embed&order=asc&orderby=title&acf_format=standard'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    
    
    



    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
   
    return (
        
        <>
        { isLoaded ?
            <>
           
            <div className='block' id='Projects'>
            <div className="projects_sec">
                <div className='projects-section'>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <h1 className='project-title'>My Projects</h1>
                </AnimationOnScroll>    
                    
                    
                    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                    
                    {restData.map((post) => 
                    
                    <SwiperSlide>
                    <article key={post.id} id={`post-${post.id}`}>
                        
                    
                   
                            <div className='projects'>

                                <Link to={`/Projects/${post.id}/#indiviual`}><HashLink smooth to={`/Projects/${post.id}/#indiviual`} ><h1 className='title-project'>{post.title.rendered}</h1></HashLink></Link>
                                <img src={post.acf.featured_image} alt="hell no" />
                                    <div className="project-info">
                                        <h5>Languages Used  - {post.acf.language_used}</h5>
                                        
                                        <h4>Overview</h4>
                                        <div>
                                        <ReadMore children={post.acf.overview}/>
                                        </div>
                                        
                                        
                                        <Link to={`/Projects/${post.id}/#indiviual`}className='project-buttons' >
                                         <button className='project-buttons'><HashLink smooth to={`/Projects/${post.id}/#indiviual`} >View</HashLink></button>
                                        </Link>

                                    
                                        
                                       
                                      
                                    </div>
                                
                            
                                
                                
                                
                            
                            </div>
                        </article>
                    </SwiperSlide>
                    
                        
                        
                    
                            
                        
                            

                            
                            
                            

                            
                        
                    )}
                    </Swiper>
                </div>
            </div> 
            </div>  
            </>
            
        : 
            <Loading />
        }
        </>
    )
}

export default Projects
