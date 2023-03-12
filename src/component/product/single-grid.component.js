import { Form, Row, Col, Card, Badge, Button } from "react-bootstrap";
import image1 from "../../assets/images/brand/acer1.avif";
const SingleGridComponent = () => {
    return (
        <>
            <Col sm={12} md={6} lg={2}>
                <Card>
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Title>Products Name</Card.Title>
                        <Card.Text as="div">
                            <p>
                                <del className="text-denger me-3" >Rs.1500</del>
                                <span>Rs. 1000</span>
                            </p>
                            <p>
                                <Badge>Category</Badge>
                            </p>
                        </Card.Text>
                        <Row>
                            <Col sm={12} md={6}>
                                <Form.Control type="number" defaultValue={1} size="sm" />
                            </Col>
                            <Col sm={12} md={6}>
                                <Button variant="success" size="sm"> Add To Cart</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}

export default SingleGridComponent;