import { Container, Row, Col } from 'react-bootstrap'
import TypeWriter from "../Typewriter"
import avatar from '../../assets/avatar.svg'
import './index.css'

const Header = () => {
    return (
        <div className='header w-100 mt-5'>
            <Container className='mx-0 w-100' style={{ maxWidth: 'none' }}>
                <Row xs={1} md={2} className='justify-content-between d-flex'>
                    <Col xs={{ order: 2 }} md={{ order: 1 }} className='mt-5 mt-md-0'>
                        <h1>
                            <TypeWriter
                                staticWord='I am a'
                                textArray={["Web Developer.", "Designer.", "MERN Stack Enjoyer.", "Engineer.", "Thinker."]}
                            />
                        </h1>
                    </Col>
                    <Col xs={{ order: 1 }} md={{ order: 2 }}>
                        <span className='avatar'>
                            <img src={avatar} className="img-fluid" alt="avatar" />
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
