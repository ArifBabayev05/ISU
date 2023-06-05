import { Col, Container, Row, } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import bottleImage from '../images/bottle.png'

const ProductDetailsPage = (props) => {
    const [data, setData] = useState([])

    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))

    }, [])



    return (
        <Container>
            <h1 className='d-flex justify-content-center mt-5'>Məhsullar</h1>

            <Row className="my-5">
                <Col className='justify-content-center d-flex' style={{ zIndex: 1 }} md={6}>
                    <img alt="some value" width='130' src={bottleImage} />

                </Col>
                <Col md={6}>

                    <div>
                        <h3>{data.title}</h3>
                    </div>
                    <p className="text-danger">Premium</p>

                    <div>
                        <p className='text-secondary'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <button type="button" style={{ backgroundColor: "var(--light-blue)" }} class="btn text-white rounded-4">Sifariş et</button>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailsPage