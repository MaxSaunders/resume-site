import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdAlternateEmail, MdOutlineMail } from 'react-icons/md'
import { Col, Container, Row } from 'react-bootstrap'
import './index.scss'

const ContactMe = () =>
    <Container fluid className='w-75'>
        <Row>
            {/* TODO: add functionality to these buttons */}
            <Col xs={3}>
                <FaLinkedinIn size='40px' className='logo-icon' />
            </Col>
            <Col xs={3}>
                <MdAlternateEmail size='40px' className='logo-icon' />
            </Col>
            <Col xs={3}>
                <VscGithub size='40px' className='logo-icon' />
            </Col>
            <Col xs={3}>
                <MdOutlineMail size='40px' className='logo-icon' />
            </Col>
        </Row>
    </Container>

export default ContactMe
