import { Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineHome, AiFillGithub, AiOutlineMenuFold, AiOutlineMail } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { FaCode } from 'react-icons/fa'
import './index.css'

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
                    <div className='fw-bold'>
                        <span className='logo'>
                            <FaCode />
                        </span>
                        <span className='logo-name'>
                            {`M. S.`}
                            {/* {`Max Saunders`} */}
                        </span>
                    </div>
                </div>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" >
            <AiOutlineMenuFold size={40} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarCollapse">
            <Routes />
        </Navbar.Collapse>
    </Navbar >

export default NavBar
