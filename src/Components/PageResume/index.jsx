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
                    <Col xs={12} lg={6} className='experience-col'>
                        <div>
                            <h1 className='primary-purple'>
                                Experience
                            </h1>
                            <div className='text-summary'>
                                <div>
                                    <div className='primary-purple fs-4 fw-bold'>
                                        PROFESSIONAL SUMMARY
                                    </div>
                                    <div>
                                        Seasoned App Development Engineer with a four-year track record across multiple companies, showcasing adaptability and a client-centric approach
                                        within specialized teams. Proficient in spearheading diverse projects, spanning greenfield developments, system modernizations, and architecture
                                        migrations. Adept at close collaboration with clients, leveraging extensive technical expertise to deliver tailored, top-tier solutions that consistently
                                        exceed expectations.
                                    </div>
                                </div>

                                <div className='mb-4 divider' />

                                <div className='primary-purple fs-4 fw-bold'>
                                    Mission Cloud Services
                                </div>
                                <div>
                                    Software Engineer | 1 year | Remote (Based in California)
                                    <ul>
                                        <li>
                                            Collaborated as a key member of a dedicated team within Mission, focusing on customized client solutions.
                                        </li>
                                        <li>
                                            Led or contributed to a range of projects, from greenfield developments to modernizing existing systems and transitioning architectures.
                                        </li>
                                        <li>
                                            I worked closely with clients to understand their specific needs and delivered tailored solutions that met and exceeded their expectations. I
                                            successfully handled a dynamic workload, adjusting to the unique requirements of each project and consistently delivering high-quality results and
                                            leveraged deep technical knowledge and skills to architect, develop, and implement solutions that optimized client systems and workflows.
                                        </li>
                                    </ul>
                                </div>

                                <div className='mb-4 divider' />

                                <div className='primary-purple fs-4 fw-bold'>
                                    Asurion
                                </div>
                                <div>
                                    Software Engineer | 1 year | Remote (Based in Virginia)
                                    <ul>
                                        <li>
                                            I collaborated within a small team of engineers focused on maintaining and enhancing our company&apos;s primary agent portal.
                                        </li>
                                        <li>
                                            Our main objective was to enhance both user and developer experiences through comprehensive optimizations.
                                        </li>
                                        <li>
                                            I led multiple front-end design projects that included designing a new portal for our agents to register and manage clients as well as
                                            implementing Contentful into our front-end design process for an existing project
                                        </li>
                                    </ul>
                                </div>

                                <div className='mb-4 divider' />

                                <div className='primary-purple fs-4 fw-bold'>
                                    Auto Data Direct
                                </div>
                                <div>
                                    Full Stack Software Developer | 2 years | Tallahassee, Fl
                                    <ul>
                                        <li>
                                            I worked on a small team of developers that would build products for the company to sell to their clients and applications for the
                                            company to track administration tasks and information.
                                        </li>
                                        <li>
                                            I lead a number of projects such as designing an email service that would send and track all emails sent from our projects as well as a
                                            reporting system that allowed our admin users to run reports on our database
                                        </li>
                                        <li>
                                            Awarded Rookie of the Year and Employee of the Month
                                        </li>
                                    </ul>
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
                                        scale={Math.max(Math.min((width / 3500), .7), .45)}
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
