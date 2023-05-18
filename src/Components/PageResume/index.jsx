import { Container, Row, Col } from "react-bootstrap"
import { Document, Page, pdfjs } from "react-pdf"
import Resume from '../../assets/resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PageResume = () => {
    return (
        <Container className='mt-3'>
            <Row>
                <Col>
                    <Document
                        file={Resume}
                        className="d-flex justify-content-center"
                    >
                        <Page pageNumber={1} scale={1.49} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                </Col>
            </Row>
        </Container>
    )
}

export default PageResume
