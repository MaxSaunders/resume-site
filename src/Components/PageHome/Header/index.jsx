import { Container, Row, Col } from 'react-bootstrap'
import TypeWriter from "../../Typewriter"
import avatar from '../../../assets/avatar.svg'
import './index.css'

const Header = () =>
    <>
        <div className='header-intro-container section'>
            <div className='d-flex justify-content-start w-100 header-intro'>
                <h1>
                    {`I'm `}
                    <span className='fw-bold primary-purple'>
                        MAX SAUNDERS
                    </span>
                </h1>
            </div>
        </div>
        <div className='header section'>
            <Container className='typer-container'>
                <Row className='justify-content-between d-flex'>
                    <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 8 }} className='px-0 mt-5 mt-md-0 align-self-center'>
                        <h1 className='mb-0 fw-bold'>
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
                    <Col className='avatar-container' xs={{ order: 1, spam: 12 }} md={{ order: 2, span: 4 }}>
                        <div className='avatar'>
                            <img src={avatar} className="img-fluid" alt="avatar" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>

export default Header
