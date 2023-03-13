import { Container, Navbar, Nav, Image, Form, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaShoppingCart, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const NavbarComponent = () => {
    return (<>
        <Navbar bg="white" variant="white" className="py-1">
            <Container>
                <Row>
                    <Col className="mx-0"><a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/"><FaFacebook /></a></Col>
                    <Col className="mx-0" bg="danger"><a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/"><FaInstagram /></a></Col>
                    <Col className="mx-0" bg="danger"><a target={"_blank"} rel="noreferrer" href="https://twitter.com/"><FaTwitter /></a></Col>
                    <Col className="mx-0" bg="danger"><a target={"_blank"} rel="noreferrer" href="https://youtube.com/"><FaYoutube /></a></Col>
                </Row>
            </Container>
        </Navbar>
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink href="/" className={"nav-brand"} >
                    <Image src={logo} style={{ maxHeight: "70px", width: "70px" }} />
                </NavLink>

                <Nav className="me-auto">
                    <NavLink className={"nav-link"} to="/" >Home</NavLink>
                    <NavLink className={"nav-link"} to="/category" >Categories</NavLink>
                    <NavLink className={"nav-link"} to="/brand" >Brands</NavLink>
                    <NavLink className={"nav-link"} to="/products" >Products</NavLink>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Nav >
                    <Nav.Link href="#cart">
                        <FaShoppingCart size={30} />
                    </Nav.Link>
                    <NavLink className={"nav-link"} to="/login">
                        Login
                    </NavLink>
                    <NavLink to="/register" className={"nav-link"}>
                        Register
                    </NavLink>

                </Nav>
            </Container>
        </Navbar>
    </>)

}
export default NavbarComponent;