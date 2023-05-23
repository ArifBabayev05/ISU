import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent";
import ProductForListComponent from "../components/ProductForListComponent";
import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent";

const ProductListPage = () => {


    
    return (
        <Container fluid>
            <Row>
                <h1 className='d-flex justify-content-center mt-5'>Məhsullar</h1>
                <Col md={3}>
                    <ListGroup roundedCircle variant="flush">
                        <h5>Kateqoriyalar</h5>
                        <ListGroup.Item className='my-4 rounded-5'>
                            <CategoryFilterComponent />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <input type="text" class="w-50 form-control form-input" width='50' style={{ right: '25%' }} placeholder="Search anything..." />
                    <div className='justify-content-end d-flex'></div>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <ProductForListComponent
                            key={index}
                            images={["games", "monitors", "tablets", "games", "monitors"]}
                            index={index}
                        />
                    ))}
                    <PaginationComponent />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductListPage;
