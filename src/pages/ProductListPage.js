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
        <Container fluid>
            <Row >
                <h1 className='d-flex justify-content-center pageTitle mt-5'>Məhsullar</h1>
                {/* <div className='blueLine'></div> */}
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
                            <form className='searchJob mb-5' style={{ alignItems: 'center', display: 'flex', top: '20px' }}>
                                <input className='searchBar mt-2 p-2' onChange={event => setQuery(event.target.value)} type='text'></input>
                                <button className='search__submit' type='submit'>
                                    <img src="" alt='some value' />
                                </button>
                            </form>
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
