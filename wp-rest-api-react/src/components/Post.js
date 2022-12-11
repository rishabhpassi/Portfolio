import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from './Loading'

import "../styles/indiviual_project.css";

const Post = ({ featuredImage }) => {
    const { id } = useParams();
    const restPath = `https://rishabhp.in/PORTFOLIO/wp-json/wp/v2/fwd-project/${id}?_embed&order=asc&orderby=title&acf_format=standard`
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)



    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if (response.ok) {
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
            {isLoaded ?
                <div id='indiviual'>

                    <article id={`post-${restData.id}`}>

                        <div className="projectImage">

                        </div>


                        <h1 className='proj-title'>{restData.title.rendered}</h1>




                        <div className="project_info">
                            <div className="language">
                                {restData._embedded['wp:featuredmedia'][0] &&
                                    <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(restData._embedded['wp:featuredmedia'][0])}></figure>
                                }
                                <button className='proj-button'> <a target="_blank" href={restData.acf.github}>Github</a></button>
                                <button className='proj-button'> <a target="_blank" href={restData.acf.live_site}>Live-Site</a></button>
                                <div className="project-box">
                                    <h4>Languages Used - </h4>
                                    <p>{restData.acf.language_used}</p>


                                    <div className="length">
                                        <h4>Duration -</h4>
                                        <p>{restData.acf.project_length}</p>
                                    </div>
                                    <div className="my_role">
                                        <h4>My Role -</h4>
                                        <p> {restData.acf.my_role}</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="overview">
                            <h4>Overview -</h4>
                            <p> {restData.acf.overview}</p>
                        </div>

                        <div className="features">
                            <h4>Features</h4>

                            <img className='features-img' src={restData.acf.features['0']} alt="IMAGE NOT AVAILABLE" />
                            <img className='features-img' src={restData.acf.features['1']} alt="IMAGE NOT AVAILABLE" />



                            <div className="features_info">
                                {restData.acf.features_info}

                            </div>

                        </div>








                    </article>

                </div>
                :
                <Loading />
            }
        </>
    )

}

export default Post
