import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { Col, Container, Row } from 'react-bootstrap'
import './index.scss'

const ContactMe = () =>
    <Container fluid className='w-75'>
        <Row>
            <Col xs={4}>
                <a
                    title='LinkedIn'
                    target='_blank'
                    rel="noreferrer"
                    href='https://www.linkedin.com/in/max-saunders-09804b153/'
                >
                    <FaLinkedinIn
                        size='40px'
                        className='logo-icon'
                    />
                </a>
            </Col>
            <Col xs={4}>
                <a
                    title='EMAIL Me'
                    target='_blank'
                    rel="noreferrer"
                    href={`mailto:max@saunders.wiki`}
                >
                    <MdOutlineMail
                        size='40px'
                        className='logo-icon'
                    />
                </a>
            </Col>
            <Col xs={4}>
                <a
                    title='Github'
                    target='_blank'
                    rel="noreferrer"
                    href='https://github.com/MaxSaunders'
                >
                    <VscGithub
                        size='40px'
                        className='logo-icon'
                    />
                </a>
            </Col>
        </Row>
    </Container>

export default ContactMe
