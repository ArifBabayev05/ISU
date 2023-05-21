import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import img1 from '../images/Rectangle-956.png'
import img2 from '../images/Rectangle-957.png'
import img3 from '../images/Rectangle-958.png'

const Gallery = () => {
    return (
        <Container className='mb-5'>
            <Row>
                <div className='mt-5 mb-3'>
                    <h1 className=' fw-bold d-flex'>Qalereya</h1>
                </div>

                <Col md={4} xs={12}>
                    <Card className='galleryCard rounded-0'>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text className='text-secondary'>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <div className='CardButton my-4'>
                                <a href="/gallery" style={{ textDecoration: 'none' }}>
                                    <p className='text-danger'>
                                        Daha ətraflı {" "}
                                        <i class="bi bi-arrow-up-right fw-bold"></i>
                                    </p>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} xs={12}>
                    <Card className='galleryCard rounded-0'>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text className='text-secondary'>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <div className='CardButton my-4'>
                                <a href="/gallery" style={{ textDecoration: 'none' }}>
                                    <p className='text-danger'>
                                        Daha ətraflı {" "}
                                        <i class="bi bi-arrow-up-right fw-bold"></i>
                                    </p>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} xs={12}>
                    <Card className='galleryCard rounded-0'>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text className='text-secondary'>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <div className='CardButton my-4'>
                                <a href="/gallery" style={{ textDecoration: 'none' }}>
                                    <p className='text-danger'>
                                        Daha ətraflı {" "}
                                        <i class="bi bi-arrow-up-right fw-bold"></i>
                                    </p>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Gallery