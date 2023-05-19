import { Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineProject, AiOutlineHome, AiFillGithub, AiOutlineMenuFold, AiOutlineMail } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { SiPolymerproject } from 'react-icons/si'

// import logo from '../../assets/logo-1-sm.png'
import './index.scss'

const Routes = () => {
    const { pathname } = useLocation()

    return (
        <Nav className="justify-content-evenly w-100">
            <Nav.Item>
                <Nav.Link active={pathname === '/'} className='justify-space-between' as={Link} to='/'>
                    <AiOutlineHome size='23' className='me-2' />
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className=''>
                <Nav.Link active={pathname === '/resume'} className='justify-space-between' as={Link} to='/resume'>
                    <CgFileDocument size='23' className='me-2' />
                    Resume
                </Nav.Link>
            </Nav.Item>

            <Nav.Item className='d-flex align-items-center'>
                <AiOutlineProject size='23' className='me-2' />
                <NavDropdown title="OTHER" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                        Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                        Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav.Item>

            <Nav.Item>
                <a className='link-a nav-link justify-space-between' target='_blank' href='https://github.com/MaxSaunders' rel="noreferrer">
                    <AiFillGithub size='23' className='me-2' />
                    Github
                </a>
            </Nav.Item>
            <Nav.Item>
                <a className='.link-a nav-link' href={`mailto:max@saunders.wiki`}>
                    <AiOutlineMail size='23' className='me-2' />
                    Email
                </a>
            </Nav.Item>
        </Nav>
    )
}

const NavBar = () =>
    <Navbar expand="md" className="navbar">
        <Navbar.Brand href='/'>
            <div className='navbar-logo'>
                <div className='logo-wrapper'>
                    {/* <img src={logo} width='50px' height='50px' alt="logo" /> */}
                    <div className='fw-bold'>
                        <span className='logo'>
                            {/* <FaCode /> */}
                            <SiPolymerproject />
                        </span>
                        <span className='logo-name'>
                            {`MS.`}
                        </span>
                    </div>
                </div>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" >
            <AiOutlineMenuFold size={40} />
        </Navbar.Toggle>
        <Navbar.Offcanvas
            // id="navbarCollapse"
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    Menu
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Routes />
            </Offcanvas.Body>
        </Navbar.Offcanvas>
        {/* <Navbar.Collapse id="navbarCollapse">
            <Routes />
        </Navbar.Collapse> */}
    </Navbar >

export default NavBar
