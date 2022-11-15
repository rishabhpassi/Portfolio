import { useState, useEffect } from 'react'
import Loading from './Loading'
import "../styles/home.css"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";




const Home = ({featuredImage}) => {
    const restPath = 'https://rishabhp.in/PORTFOLIO/wp-json/wp/v2/pages/5?_embed'
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
        <div className='grid-div' id='Home'>
            <div className='background-blue'></div>
                    <div className='background-green'></div>
                <article className='front-page'>

                    
                    <div className="left-home-content">
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <h1 className="title-site" dangerouslySetInnerHTML={{__html:restData.title.rendered}}>
                            </h1>
  
                    </AnimationOnScroll>
                           
                            <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}}>
                            </div>
                    </div>    
                    <div className='avatar'>
                        <img src= {restData._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="image" />
                    </div>
                    
                    
                </article>
            </div> 
            
         </>
        : 
            <Loading />
        }
        </>   
    )
  
}

export default Home
