import { Row, Container } from "react-bootstrap"
import CategoryCardComponent from "../components/CategoryCardComponent"
import ProductCarouselComponent from "../components/ProductCarouselComponent"

const HomePage = () => {

    const categories = [
        'Tablets',
        'Books',
        'Cameras',
        'Monitors',
        'Games',
        'Software',

    ]
    return (
        <>
            <ProductCarouselComponent />
            <Container>
                <Row xs={1} md={2} className="g-4 mt-5">
                    {
                        categories.map((category,index) => <CategoryCardComponent key={index} category={category} index={index}/>)
                    }
                </Row>
            </Container>
        </>
    )
}

export default HomePage