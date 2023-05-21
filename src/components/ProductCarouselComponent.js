import React from 'react'
import { Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    crossOrigin="anonymous"
                    className="d-block w-100"
                    style={{ "height": "300", objectFit: "cover" }}
                    src="/images/carousel/carousel-1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <LinkContainer style={{"cursor":"pointer"}} to='/product-detail'>
                        <h3>Bestsellers in Laptop Category</h3>
                    </LinkContainer>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    crossOrigin="anonymous"
                    className="d-block w-100"
                    style={{ "height": "300", objectFit: "cover" }}
                    src="/images/carousel/carousel-2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <LinkContainer style={{"cursor":"pointer"}} to='/product-detail'>
                        <h3>Bestsellers in Books Category</h3>
                    </LinkContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    crossOrigin="anonymous"
                    className="d-block w-100"
                    style={{ "height": "300", objectFit: "cover" }}
                    src="/images/carousel/carousel-3.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <LinkContainer style={{"cursor":"pointer"}} to='/product-detail'>
                        <h3>Bestsellers in Cameras Category</h3>
                    </LinkContainer>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductCarouselComponent