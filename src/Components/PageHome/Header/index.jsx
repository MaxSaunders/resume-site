import { Container, Row, Col } from 'react-bootstrap'
import TypeWriter from "../../Typewriter"
import avatar from '../../../assets/avatar.svg'
import './index.css'

const Header = () =>
    <>
        <div className='d-flex justify-content-start w-100 header-intro'>
            <h1>
                {`I'm `}
                <span className='fw-bold primary-purple'>
                    MAX SAUNDERS
                </span>
            </h1>
        </div>
        <div className='header w-100 mt-5'>
            <Container className='mx-0 w-100' style={{ maxWidth: 'none' }}>
                <Row xs={1} md={2} className='justify-content-between d-flex'>
                    <Col xs={{ order: 2 }} md={{ order: 1 }} className='px-0 mt-5 mt-md-0'>
                        <h1 className='fw-bold'>
                            <TypeWriter
                                staticWord='I am a'
                                textArray={[
                                    "Web Developer.",
                                    "Designer.",
                                    "MERN Stack Enjoyer.",
                                    "Software Engineer.",
                                    "Thinker."
                                ]}
                            />
                        </h1>
                    </Col>
                    <Col className='avatar-container' xs={{ order: 1 }} md={{ order: 2 }}>
                        <div className='avatar'>
                            <img src={avatar} className="img-fluid" alt="avatar" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>

export default Header
