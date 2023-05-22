/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import Page404 from '../Page404';
import HackerTextDemo from '../HackerText';
import Icon404 from '../../assets/404-icon.png'
import hacker from '../../assets/hacker-icon.png'
import './index.scss'

const ProjectWrapper = ({ goBack, Component }) =>
    <div className='project-wrapper'>
        <Button size='lg' onClick={goBack}>
            {`\u2190 Go Back`}
        </Button>
        <div className='mt-5'>
            {<Component />}
        </div>
        <div>
            <code>

            </code>
        </div>
    </div>

const ProjectCard = ({ title, img, tab, setTab, height, width }) =>
    <Col xs={12} md={4} className='mb-5'>
        <Card className='project-card pb-0' bg='dark' onClick={() => setTab(tab)}>
            <div>
                {/* <div style={{ maxHeight: '150px', maxWidth: '350px', minHeight: '150px', minWidth: '350px' }}> */}
                <Card.Img height={height} width={width} style={{ maxHeight: height, maxWidth: width }} variant='top' src={img} />
            </div>
            <Card.Body className='mt-4'>
                <Card.Title>
                    {title}
                </Card.Title>
            </Card.Body>
        </Card>
    </Col>

const CardGrid = ({ setTab }) =>
    <Row className='card-grid'>
        <ProjectCard title='404 Page' img={Icon404} setTab={setTab} tab={1} height='150px' width='160px' />
        <ProjectCard title='Hacker Text' img={hacker} setTab={setTab} tab={2} height='150px' width='250px' />
    </Row>

const PageProjects = () => {
    const [tab, setTab] = useState(0)
    const goBack = () => setTab(0)

    return (
        <div>
            <Container className='mt-5'>
                {tab == 0 && <CardGrid setTab={setTab} />}
                {tab == 1 && <ProjectWrapper Component={Page404} goBack={goBack} />}
                {tab == 2 && <ProjectWrapper Component={HackerTextDemo} goBack={goBack} />}
            </Container >
        </div>
    )
}

export default PageProjects
