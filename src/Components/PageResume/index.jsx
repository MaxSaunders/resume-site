import { Container, Row, Col, Button } from "react-bootstrap"
import { Document, Page, pdfjs } from "react-pdf"
import { useEffect, useState } from "react";
import { FiDownload } from 'react-icons/fi'

import Resume from '../../assets/resume.pdf'
import './index.scss'

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
                    <Col xs={12} lg={6} className='mb-5'>
                        <div>
                            <h1 className='primary-purple'>
                                Experience
                            </h1>
                            <div className='text-summary'>
                                <div className='primary-purple fs-4 fw-bold'>
                                    Asurion
                                </div>
                                <div>
                                    Software Engineer, 1 year
                                    <ul>
                                        <li>
                                            I worked on a small team of engineers that worked to support our company’s main agent portal.
                                        </li>
                                        <li>
                                            Our goal was to optimizer and improve both a user and developer experience in whatever ways we could
                                        </li>
                                        <li>
                                            I led multiple front-end design projects that included designing a new portal for our agents to register
                                            clients and manage their information as well as implementing a new tool called Contentful into our
                                            front-end design process for an existing project
                                        </li>
                                    </ul>
                                </div>
                                <div className='mb-4 divider' />
                                <div className='primary-purple fs-4 fw-bold'>
                                    Auto Data Direct
                                </div>
                                <div>
                                    Full Stack Software Developer, 3 years
                                    <ul>
                                        <li>
                                            I worked on a small team of developers that would build products for the company to sell to their clients
                                            and applications for the company to track administration tasks and information.
                                        </li>
                                        <li>
                                            I lead a number of projects such as designing an email service that would send and track all emails sent
                                            from our projects as well as a reporting system that allowed our admin users to run reports on our
                                            database
                                        </li>
                                        <li>
                                            I worked on frontend development in React, Js, Node.js and HTML and backend work in Java, C#,
                                            Postgresql
                                        </li>
                                        <li>
                                            Awarded Rookie of the year and Employee of the Month
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div className='primary-purple fs-4 fw-bold'>
                                        PROFESSIONAL SUMMARY
                                    </div>
                                    <div>
                                        Accomplished and energetic Software Developer with a solid history of achievement in developing both
                                        front-end UI and backend software. A motivated and adaptive leader with strong organizational and
                                        prioritization abilities. Areas of expertise include Software Development, Project Management, and Information
                                        Security.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
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
                                        scale={Math.max(Math.min((width / 1900), 1), .75)}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                    />
                                </Document>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageResume
