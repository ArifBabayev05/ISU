import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'

import Image1 from '../images/unsplash_Of_m3hMsoAA-1.png'
import Image2 from '../images/unsplash_Of_m3hMsoAA-2.png'
import Image3 from '../images/unsplash_Of_m3hMsoAA.png'
const About = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col md={6} xs={12}>
                    <h1 className='fw-bold mb-4'>Haqqımızda</h1>
                    <p className='text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                    <Badge bg="danger">
                        Daha ərtaflı
                    </Badge>{' '}
                </Col>
                <Col md={6} xs={12} className='d-flex'>
                    <div >
                        <img className='img1' src={Image1} />
                    </div>

                    <div >
                        <img className='img2' src={Image2} />
                    </div>

                    <div >
                        <img className='img3' src={Image3} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About