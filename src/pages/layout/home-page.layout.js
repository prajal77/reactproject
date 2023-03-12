
import { Container, Row, Col, Card, } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/images/banner/luggage.jpg"
import banner2 from "../../assets/images/banner/m04.jpg";
import banner3 from "../../assets/images/banner/vloggergear.jpg"
import image1 from "../../assets/images/brand/acer1.avif";
import image2 from "../../assets/images/brand/asus.avif";
import image3 from "../../assets/images/brand/dell1.avif";
import image4 from "../../assets/images/brand/lenovo.avif";
import image5 from "../../assets/images/brand/hp.avif";
import image6 from "../../assets/images/brand/msi.avif"
import NavbarComponent from "../../component/front/navbar.component";
import SingleGridComponent from "../../component/product/single-grid.component";

const HomePageLayout = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <NavbarComponent />
            <Slider {...settings}>
                <div>
                    <img src={banner1} alt="" className="img img-fluid" />
                </div>
                <div>
                    <img src={banner2} alt="" className="img img-fluid" />
                </div>
                <div>
                    <img src={banner3} alt="" className="img img-fluid" />
                </div>
            </Slider>

            <Container className="my-5" fluid>
                <Row className="py-1">
                    <Col>
                        <h4>Brands</h4>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col sm={12} md={6} lg={2}>
                        <Card>
                            <Card.Img variant="top" src={image1} />
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                        <Card>
                            <Card.Img variant="top" src={image2} />
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                        <Card>
                            <Card.Img variant="top" src={image3} />
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                        <Card>
                            <Card.Img variant="top" src={image4} />
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                        <Card>
                            <Card.Img variant="top" src={image5} />
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                        <Card>
                            <Card.Img variant="top" src={image6} />
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5" fluid>
                <Row>
                    <Col>
                        <h4>Leatest Products</h4>
                    </Col>
                </Row>
                <Row>
                    <SingleGridComponent />
                    <SingleGridComponent />

                </Row>

            </Container>

        </>
    )
}
export default HomePageLayout;