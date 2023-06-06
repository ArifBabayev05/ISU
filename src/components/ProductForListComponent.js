import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
import { LinkContainer } from "react-router-bootstrap"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bottleImage from '../images/bottle.png'
import '../style/product.css'

const ProductForListComponent = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${props.product.id}`)
      .then(res => {
        setData(res.data.length)
      }).catch(err => console.log(err))

  }, [])

  return (
    <div className="col ">
      <div className='border-0 rounded container'>
        <div className="card mx-1 border-none card-margin" style={{ "width": "250px" }}>

          <Link id='cards' to={`/product-detail/${props.product.id}`} style={{ textDecoration: 'none' }}>

            <div width='150' className="card-body bodyy pt-0 mt-4">

              <div className="widget-49">
                <div className="widget-49-title-wrapper">
                  <div className="widget-49-date-primary d-flex justify-content-center p-2">
                    <img style={{ 'width': '60px', 'border-radius': "50px",  }} src={bottleImage} alt='aaa' />
                  </div>
                  <div className='priceTag'>15$</div>
                  <div className="widget-49-meeting-info">
                    <span className="widget-49-pro-title fw-600 text-dark fs-6">{props.product.title}</span>
                  </div>
                  <div className="widget-49-meeting-info">
                    <span className="widget-49-pro-description text-secondary">{props.product.description.slice(1, 20)}...</span>
                  </div>
                </div>
                
              </div>
            </div>
          </Link >
        </div>
      </div>

    </div>
  );
};

export default ProductForListComponent;