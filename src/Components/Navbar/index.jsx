import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './index.css'

const NavBar = () => {
    return (
        <Navbar
            expanded
            fixed="top"
            expand="md"
            className="navbar">
            <Navbar.Brand>
                <div className='navbar-logo'>
                    <div className='logo-wrapper'>
                        <h1>
                            <span className='logo'>
                                {`</>`}
                            </span>
                            <span className='logo-name'>
                                {`Max Saunders`}
                            </span>
                        </h1>
                    </div>
                </div>
            </Navbar.Brand>
            {/* <Navbar.Toggle>
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle> */}
            <Navbar.Collapse>
                <Nav className="ms-auto">
                    <Nav.Item>
                        <Nav.Link as={Link} to='/'>
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/'>
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/'>
                            Github
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
