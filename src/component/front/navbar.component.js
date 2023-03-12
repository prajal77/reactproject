import { Container, Navbar, Nav, Image, Form } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
const NavbarComponent = () => {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"  >
                    <Image src={logo} style={{ maxHeight: "70px", width: "70px" }} />
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Categories</Nav.Link>
                    <Nav.Link href="#brands">Brands</Nav.Link>
                    <Nav.Link href="#products">Products</Nav.Link>
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
                    <Nav.Link href="/login">
                        Login
                    </Nav.Link>
                    <Nav.Link href="/register">
                        Register
                    </Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    </>)

}
export default NavbarComponent;