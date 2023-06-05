import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "../style/homePage.css"
const Services = () => {
    return (
        <Container>
            <Row>
                <div className='mb-5'>
                    <h1 className=' fw-bold justify-content-center d-flex'>Xidmətlərimiz </h1>
                </div>

                <Col md={4} xs={12}>
                    <Card className='rounded-0 mb-3 container ServiceCards'>
                        <div className='CardLogo text-danger fs-2 pt-1'><i class="bi bi-basket2"></i></div>
                        <div className='CardTitle'><h4 className='fw-bold'>Sifariş Et</h4></div>
                        <div className='CardText'><p className='text-secondary' style={{ fontSize: '12px', width: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non leo at justo posuere luctus. Maecenas id mauris sit.
                        </p></div>
                        <div className='CardButton my-4'>
                            <a href="services"   style={{ textDecoration: 'none' }}>
                                <p className='text-danger'>
                                    Daha ətraflı {" "}
                                    <i class="bi bi-arrow-up-right fw-bold"></i>
                                </p>
                            </a>
                        </div>
                    </Card>
                </Col>

                <Col md={4} xs={12}>
                    <Card className='rounded-0 mb-3 container ServiceCards'>
                        <div className='CardLogo text-danger fs-2 pt-1'><i class="bi bi-arrow-clockwise"></i></div>
                        <div className='CardTitle'><h4 className='fw-bold'>Geriqaytarılma xidməti</h4></div>
                        <div className='CardText'><p className='text-secondary' style={{ fontSize: '12px', width: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non leo at justo posuere luctus. Maecenas id mauris sit.
                        </p></div>
                        <div className='CardButton my-4'>
                            <a href="services"   style={{ textDecoration: 'none' }}>
                                <p className='text-danger'>
                                    Daha ətraflı {" "}
                                    <i class="bi bi-arrow-up-right fw-bold"></i>
                                </p>
                            </a>
                        </div>
                    </Card>
                </Col>

                <Col md={4} xs={12}>
                    <Card className='rounded-0 mb-3 container ServiceCards'>
                        <div className='CardLogo text-danger fs-2 pt-1'><i class="bi bi-truck"></i></div>
                        <div className='CardTitle'><h4 className='fw-bold'>Bağlamaların daşınması</h4></div>
                        <div className='CardText'><p className='text-secondary' style={{ fontSize: '12px', width: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non leo at justo posuere luctus. Maecenas id mauris sit.
                        </p></div>
                        <div className='CardButton my-4'>
                            <a href="services"   style={{ textDecoration: 'none' }}>
                                <p className='text-danger'>
                                    Daha ətraflı {" "}
                                    <i class="bi bi-arrow-up-right fw-bold"></i>
                                </p>
                            </a>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Services