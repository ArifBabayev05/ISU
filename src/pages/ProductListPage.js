import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent";
import ProductForListComponent from "../components/ProductForListComponent";
import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import "../style/product.css"

const ProductListPage = () => {
    const url = `https://fakestoreapi.com/products`
    const [query, setQuery] = useState("")


    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })



    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false

        })

        axios.get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })

                    .catch(() => {
                        setProducts({
                            loading: false,
                            data: null,
                            error: true
                        })
                    })
            })
    }, [url])

    let content = null


    if (products.error) {
        content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
    }

    if (products.data) {
        content =
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductForListComponent product={product} />
                </div>
            )

    }

    if (products.data) {
        content =
            products.data.filter(product => {
                if (query === "") {

                    return product;

                } else if (product.title.toLowerCase().includes(query.toLowerCase())) {

                    return product;
                }

            }).map((product) =>
                <div key={product.id}>
                    <ProductForListComponent product={product} />
                </div>
            ).reverse();
    }
    return (
        <Container>
            <Row >
                <h1 className='d-grid justify-content-center pageTitle mt-5'>Məhsullar
                    <div className='blueLine'></div>
                </h1>

                <Col md={3}>
                    <ListGroup roundedCircle variant="flush">
                        <h5>Kateqoriyalar</h5>
                        <ListGroup.Item className='my-4 rounded-5'>
                            <CategoryFilterComponent />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <div>
                        <div className='d-flex container'>


                            <div className='inner-form'>
                                <div className='input-field'>
                                    <button type='button' className="btn-search">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                                    </button>
                                    <input id="search" onChange={event => setQuery(event.target.value)} type="text" />
                                </div>
                            </div>
                        </div>

                        <div className='row row-cols-1 row-cols-sm-1 row-cols-lg-3 g-4 mx-5'>
                            {content}
                        </div>
                    </div>
                    {/* <input type="text" class="w-50 form-control form-input" width='50' style={{ right: '25%', border: 'none' }} placeholder="Search anything..." />
                    <div className='justify-content-end d-flex'></div>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <ProductForListComponent
                            key={index}
                            images={["games", "monitors", "tablets", "games", "monitors"]}
                            index={index}
                        />
                    ))} */}
                    <PaginationComponent />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductListPage;
