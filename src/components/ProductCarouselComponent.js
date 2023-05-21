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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non leo at justo posuere luctus. Maecenas id mauris sit.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non leo at justo posuere luctus. Maecenas id mauris sit.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductCarouselComponent