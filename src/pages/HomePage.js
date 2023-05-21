import { Row, Container } from "react-bootstrap"
import CategoryCardComponent from "../components/CategoryCardComponent"
import ProductCarouselComponent from "../components/ProductCarouselComponent"
import Sponsorships from "../components/Sponsorships"
import About from "../components/About"
import Services from "../components/Services"

const HomePage = () => {

    return (
        <>
            <ProductCarouselComponent />
            <Sponsorships/>
            <About/>
            <Services/>
        </>
    )
}

export default HomePage