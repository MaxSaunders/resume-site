import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiFillGithub, AiOutlineMenuFold, AiOutlineMail } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import './index.css'

const NavBar = () => {
    return (
        <Navbar expand="md" className="navbar">
            <Navbar.Brand>
                <div className='navbar-logo'>
                    <div className='logo-wrapper'>
                        <div className='fw-bold'>
                            <span className='logo'>
                                {`</>`}
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
                <Nav className="justify-content-evenly w-100">
                    <Nav.Item>
                        <Nav.Link className='justify-space-between' as={Link} to='/'>
                            <AiOutlineHome size='23' className='me-2' />
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className=''>
                        <Nav.Link className='justify-space-between' as={Link} to='/resume'>
                            <CgFileDocument size='23' className='me-2' />
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <a className='nav-link justify-space-between' target='_blank' href='https://github.com/MaxSaunders' rel="noreferrer">
                            <AiFillGithub size='23' className='me-2' />
                            Github
                        </a>
                    </Nav.Item>
                    <Nav.Item>
                        <a className='nav-link' href={`mailto:max@saunders.wiki`}>
                            <AiOutlineMail size='23' className='me-2' />
                            Email
                        </a>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default NavBar
