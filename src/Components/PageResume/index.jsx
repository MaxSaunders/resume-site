import { Container, Row, Col, Button } from "react-bootstrap"
import { Document, Page, pdfjs } from "react-pdf"
import { useEffect, useState } from "react";
import { FiDownload } from 'react-icons/fi'
import Resume from '../../assets/resume.pdf'
import './index.scss'
import ContactMe from "../ContactMe";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PageResume = () => {
    const [width, setWidth] = useState(500)

    useEffect(() => {
        setWidth(window.innerWidth)

        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        }, false)
    }, [])

    return (
        <div className='resume-container'>
            <Container className='mt-3'>
                <Row>
                    <Col xs={12} className='resume-controls-row mb-3'>
                        <Button size="lg" className='download-button' target="_blank" href={Resume}>
                            <span className='me-2'>
                                Download
                            </span>
                            <FiDownload />
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <Document
                            file={Resume}
                            className="d-flex justify-content-center"
                        >
                            <Page
                                className=''
                                pageNumber={1}
                                scale={Math.max(Math.min((width / 1900), 1.5), 1)}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        </Document>
                    </Col>
                </Row>
            </Container >
            <div className='footer'>
                <div className='footer-content'>
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
                                    Copyright 2023
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default PageResume
