import { Col, Container, Row } from "react-bootstrap"
import { BiCopyright } from 'react-icons/bi'
import ContactMe from "../ContactMe"
import './index.scss'

const Footer = () =>
    <footer className='footer'>
        <div className='footer-content text-light'>
            <Container className='px-0'>
                <Row className="mx-1">
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 1 }} className='px-0 justify-content-center align-items-center d-flex disclaimer-text'>
                        <div className='fs-5'>
                            {`Designed and Developed by \nMax Saunders`}
                        </div>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }} className='px-0'>
                        <ContactMe />
                    </Col>
                    <Col xs={{ span: 12, order: 3 }} md={{ span: 4, order: 3 }} className='px-0 justify-content-center align-items-center d-flex'>
                        <div className='fs-5'>
                            {`Copyright `}
                            <BiCopyright />
                            {` 2023`}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>

export default Footer