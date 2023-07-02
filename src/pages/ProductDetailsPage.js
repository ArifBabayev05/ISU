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
                    <img style={{ "object-fit": "contain" }} alt="some value" width='130' src={bottleImage} />

                </Col>
                <Col md={6}>

                    <div>
                        {/* <h3>{data.title}</h3> */}
                        <h3>Badamlı Qazsız Su</h3>
                    </div>
                    <p className="text-danger">Premium</p>

                    <div>
                        <p className='text-secondary'>
                            Mineral su yerin ən dərin qatlarından çıxır, çıxdığı yerin geoloji xüsusiyyətlərini daşıyır və maqmadan aldığı karbon qazının təzyiqi ilə səthə çıxır. Bu səbəblə mineral su minerallarla çox zəngindir.<br /> <br />

                            ISU ilə təbii su sifarişi həm sərfəli, həm də rahatdır. 3 ədəd 19 litrlik bidon su sifarişi verənə 1 ədəd pompa ilk sifarişdə hədiyyə olunur. Evlərə su çatdırılması depozitsiz və pulsuzdur.
                            <br />
                            <br />

                            Su sifarişi mobil tətbiqdə
                            <br />
                            Susifarişi indi mobil tətbiqlə daha asan!  <br />
                            App ilə su sifarişinin üstünlükləri:  <br />
                            - Bir toxunuşla sifariş;  <br />
                            - Rahat seçim imkanı;  <br />
                            - Sifarişi uyğun zamana planlama;  <br />
                            - 7/24 sifariş planlama;  <br />
                            - Yer seçiminin xəritə üzərindən olması;  <br />
                            <br />


                            Mobil tətbiqi yükləyərək sadəcə bir toxunuşla sifarişinizi təsdiqləyin və ISU'dan qapınıza gəlsin!

                        </p>
                        <button type="button" style={{ backgroundColor: "var(--light-blue)" }} class="btn text-white rounded-4">Sifariş et</button>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailsPage