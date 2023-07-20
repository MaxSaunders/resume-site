/* eslint-disable react/prop-types */
import { useState } from 'react'
import { CloseButton, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineProject, AiOutlineHome, AiFillGithub, AiOutlineMenuFold, AiOutlineMail } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { SiPolymerproject } from 'react-icons/si'

// import logo from '../../assets/logo-1-sm.png'
import './index.scss'

const Routes = ({ close }) => {
    const { pathname } = useLocation()

    return (
        <Nav className="justify-content-evenly w-100">
            <Nav.Item>
                <Nav.Link onClick={close} active={pathname === '/'} className='mb-4 mb-md-0 justify-space-between' as={Link} to='/'>
                    <AiOutlineHome size='23' className='me-2' />
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={close} active={pathname === '/resume'} className='mb-4 mb-md-0 justify-space-between' as={Link} to='/resume'>
                    <CgFileDocument size='23' className='me-2' />
                    Resume
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <a onClick={close} className='mb-4 mb-md-0  link-a nav-link justify-space-between' target='_blank' href='https://maxsaunders.github.io/dev-projects/' rel="noreferrer">
                    <AiOutlineProject size='23' className='me-2' />
                    Projects
                </a>
            </Nav.Item>
            <Nav.Item>
                <a onClick={close} className='mb-4 mb-md-0 link-a nav-link justify-space-between' target='_blank' href='https://github.com/MaxSaunders' rel="noreferrer">
                    <AiFillGithub size='23' className='me-2' />
                    Github
                </a>
            </Nav.Item>
            <Nav.Item>
                <a onClick={close} className='mb-4 mb-md-0 link-a nav-link' href={`mailto:max@saunders.wiki`}>
                    <AiOutlineMail size='23' className='me-2' />
                    Email
                </a>
            </Nav.Item>
            {/* TODO: consider changing the contact part of this to the contact me section, might look better */}
        </Nav>
    )
}

const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const close = () => setOpen(false)
    const open = () => setOpen(true)

    return (
        <Navbar expanded={isOpen} expand="md" className="navbar">
            <Navbar.Brand as={Link} to='/'>
                <div className='navbar-logo'>
                    <div className='logo-wrapper'>
                        <div className='fw-bold'>
                            <span className='logo'>
                                <SiPolymerproject />
                            </span>
                            <span className='logo-name'>
                                {`MS.`}
                            </span>
                        </div>
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle onClick={open} aria-controls="navbarCollapse" >
                <AiOutlineMenuFold size={40} />
            </Navbar.Toggle>
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end">
                <Offcanvas.Header>
                    <Offcanvas.Title className='w-100 d-flex justify-content-between fs-4 p-1' id={`offcanvasNavbarLabel-expand-md`}>
                        <div>
                            Menu
                        </div>
                        <div>
                            <CloseButton className='btn-light' onClick={close} />
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Routes open={open} close={close} />
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar >
    )
}

export default NavBar
