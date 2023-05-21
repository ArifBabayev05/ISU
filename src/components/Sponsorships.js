import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Amazon from '../images/icons/amazon.png'
import Bloomberg from '../images/icons/Bloomberg.png'
import Opengov from '../images/icons/opengov.png'
import Allegro from '../images/icons/Allegro.png'

const Sponsorships = () => {
    return (
        <Container>
            <div>
                <h1 className='d-flex justify-content-center my-4 fw-bold'>B2B Müştərilər</h1>
            </div>
            <div>
                <Row className='justify-content-center d-flex'>
                    <Col className='mb-4' md={2} xs={4}><img src={Bloomberg} /></Col>
                    <Col className='mb-4' md={2} xs={4}><img src={Opengov} /></Col>
                    <Col className='mb-4' md={2} xs={4}><img src={Allegro} /></Col>
                    <Col className='mb-4' md={2} xs={4}><img src={Amazon} /></Col>
                    <Col className='mb-4' md={2} xs={4}><img src={Bloomberg} /></Col>
                    <Col className='mb-4' md={2} xs={4}><img src={Opengov} /></Col>
                </Row>
            </div>
        </Container>
    )
}

export default Sponsorships