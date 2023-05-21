import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
import { LinkContainer } from "react-router-bootstrap"
const ProductForListComponent = ({images,index}) => {
  return (
    <Card style={{ margin: "30px 0 50px 0" }}>
      <Row>
        <Col lg={5}>
          <Card.Img variant="top" src={"/images/" + images[index]+ "-category.png"} />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Example Product Name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5}></Rating> (1)
            </Card.Text>
            <Card.Text className="h4">
              124$ {" "}
              <LinkContainer to='/product-detail'>
                <Button variant="primary">
                  Product Details
                </Button>
              </LinkContainer>
            </Card.Text>

          </Card.Body>
        </Col>
      </Row>

    </Card>
  );
};

export default ProductForListComponent;