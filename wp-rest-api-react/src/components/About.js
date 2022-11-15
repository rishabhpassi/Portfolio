import { useState, useEffect } from 'react'
import Loading from './Loading'
import"../styles/about.css";


const About = () => {
    const restPath = 'https://rishabhp.in/PORTFOLIO/wp-json/wp/v2/pages/68?_embed'
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
        <div className="about-section" id='about'>
            <article id={`post-${restData.id}`}>
                <h1 className='about-title'>{restData.title.rendered}</h1>
                <span class="box-about"><span className='high'>
                <div className="about-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}}>
                </div>
                </span>
                </span>
            </article>
        </div>    
        : 
            <Loading />
        }
        </>
    )
}

export default About
