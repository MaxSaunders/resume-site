import { Container, Row, Col } from "react-bootstrap"
import { Document, Page, pdfjs } from "react-pdf"
import { useEffect, useState } from "react";
import Resume from '../../assets/resume.pdf'

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
        <Container className='mt-3'>
            <Row>
                <Col>
                    <Document
                        file={Resume}
                        className="d-flex justify-content-center"
                    >
                        <Page
                            pageNumber={1}
                            scale={Math.min((width / 650), 1.5)}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    </Document>
                </Col>
            </Row>
        </Container >
    )
}

export default PageResume
