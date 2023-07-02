import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "../style/homePage.css"

import Logo from '../images/iSULogo.png'

// import Logo from "../../public/images/iSULogo.png"
const ProductCarouselComponent = () => {
    return (
        <div className='hero'>
            <Container fluid='md'>
                <Row>
                    <Col xs={12} md={3} >
                        <img width='220' className='mt-5 mb-5' src={Logo} />
                    </Col>

                    <Col xs={12} md={9}>
                        <div className='mt-5 text text-white'>
                            <h1 className='fs-1 fw-bold'>Bizdən al, sağlam qal</h1>
                            <p className='t1'>
                                You can order clean water just one click. <br/>
                                With our user-friendly website, ordering clean water is as simple as a single click. We believe in making your experience effortless and time-saving, so we have designed our platform to be intuitive and easy to navigate. 
                            </p>

                            <p>
                                Easy order and fast delivery <br />
                                Experience the ultimate convenience with our easy order and fast delivery services. With just a few clicks, you can place an order for our refreshing waters and have them delivered to your doorstep in no time. 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductCarouselComponent