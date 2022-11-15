import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import"../styles/skills.css"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Works = ( {featuredImage} ) => {
    const restPath = 'https://rishabhp.in/PORTFOLIO/wp-json/wp/v2/fwd-skill?_embed'
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
            <div className="sec-skills" id='skills'>
                <AnimationOnScroll animateIn='animate__fadeInTopRight'>

                <h1 className='skills-heading'>Skills</h1>
                </AnimationOnScroll>
                
                <div className='skill-card'>
                {restData.map(post => 
                    <>
                    
                    <div className='Skills'>
                        <div className="section-box">
                            <div className="skills-title">
                                <h2>{post.title.rendered}</h2>
                            </div>
                            <div className="skills-content">
                                <div className="skills-overview">
                                    <p>{post.acf.skills_para}</p>
                                </div>
                                <h4>Things I Love -</h4>
                                <div className="skills-languages">
                                <span class="highlight-container"><span class="highlight">
                                {post.acf.languages}
                                </span>
                                </span>
                                </div>
                                <h4>Tools -</h4>
                                <div className="skills-tools">
                                 {post.acf.tools}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                        

                    </>
                    
                    
                        
                      
                        

                        
                        
                        

                        
                    
                )}
                </div>
                </div>
            </>
        : 
            <Loading />
        }
        </>
    )
}

export default Works
