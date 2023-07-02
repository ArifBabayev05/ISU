import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Image from '../images/bottle.png'

import "../style/BlogCard.css"
const BlogForListComponent = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${props.product.id}`)
            .then(res => {
                setData(res.data.length)
            }).catch(err => console.log(err))

    }, [])

    return (
        <div className="col">
            <div className='border-0 rounded container'>
                <Link id='cards' to={`/blog-detail/${props.product.id}`} style={{ textDecoration: 'none' }}>
                    <div width='150' className="cardd-body bodyy pt-0 mt-4">
                        <div className="cardd">
                            <img src={Image} alt="Cardd" className="cardd-image" />
                            <div className="cardd-content">
                                <h2 className="cardd-title">{props.product.title.slice(0, 10)}</h2>
                                <p className="cardd-description">{props.product.description.slice(0, 80)}...</p>
                                <div>
                                    <button className="view-more-button">Daha Ətraflı {  }
                                        <i class="bi bi-arrow-up-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link >
            </div>
        </div>
    );
}

export default BlogForListComponent