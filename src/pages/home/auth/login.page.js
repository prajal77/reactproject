import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
const LoginPage = () => {
    let [data, setData] = useState();
    // console.log("Data:", data);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data:", data);

    }
    return (<>
        <Container className="mt-3">
            <Row>
                <Col>
                    <h4>Login Page</h4>
                </Col>
            </Row>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">UserName:</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="email"
                            size="sm"
                            placeholder="Enter your email"
                            required
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    email: e.target.value
                                })
                            }}
                            name="email"
                        />
                        <span className="text-danger">{ }</span>
                    </Col>
                </Form.Group>
                {/* <div className="form-group row mb-3">
                    <label className="form-label col-sm-3">
                        UserName:
                    </label>
                    <div className="col-sm-9">
                        <input className="form-control form-control-sm"
                            type={"email"}
                            placeholder="Enter your email:"
                            name="email"
                            required />
                        <span className="text-danger">{ }</span>
                    </div>
                </div> */}

                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Password:</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="password"
                            size="sm"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    password: e.target.value
                                })
                            }}
                            name="password"
                        />
                        <span className="text-danger">{ }</span>
                    </Col>
                </Form.Group>

                <Form.Group className="row md-3">
                    <Col sm={{ offset: 3, span: 9 }}>
                        <Button type="reset" variant="danger" size="sm" className="me-3">
                            <FaTrash /> Cancel
                        </Button>
                        <Button type="submit" variant="success" size="sm" >
                            <FaPaperPlane /> LogIn
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    </>)
}

export default LoginPage;