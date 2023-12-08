import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../utils/TokenUtil";
import { useNavigate } from "react-router-dom";

export function NavigationBar() {
    const navigate=useNavigate();
    const handleLogoutClick=()=>{
        logout();
        navigate("/");
    }
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Student App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/dashboard">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/students-list">
                            <Nav.Link>Students List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/student-registration">
                            <Nav.Link>Register Student</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Button variant="primary" size="sm" onClick={handleLogoutClick}>Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}