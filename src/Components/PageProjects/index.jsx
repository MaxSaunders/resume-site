/* eslint-disable react/prop-types */
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import { BsFillChatLeftQuoteFill } from 'react-icons/bs'
import { SiHackster, SiPokemon } from 'react-icons/si'
import { TbError404 } from 'react-icons/tb'
import { BsArrowLeft } from 'react-icons/bs'

import Page404 from '../Page404';
import Quotes from '../Projects/Quotes';
import Pokemon from '../Projects/PokemonV1';
import HackerTextDemo from '../Projects/HackerText';
import './index.scss'

const ProjectCard = ({ title, ChildrenComp, path }) => {
    const { url } = useRouteMatch()
    return (
        <Col xs={12} md={6} xl={4} className='mb-5'>
            <Link to={`${url}/${path}`}>
                <Card className='project-card pb-0' bg='dark'>
                    <div className='project-card-logo'>
                        {ChildrenComp}
                    </div>
                    <Card.Body className='mt-4'>
                        <Card.Title className='project-title'>
                            {title}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

const CardGrid = () =>
    <Row className='card-grid'>
        <ProjectCard title='404 Page' path="404" ChildrenComp={<TbError404 size='150px' />} />
        <ProjectCard title='Hacker Text' path="hacker" ChildrenComp={<SiHackster size='150px' />} />
        <ProjectCard title='Quotes' path="quotes" ChildrenComp={<BsFillChatLeftQuoteFill size='150px' />} />
        <ProjectCard title='Guess That Pokemon v1' path="pokemon" ChildrenComp={<SiPokemon size='150px' />} />
    </Row>

const PageProjects = () => {
    const location = useLocation()
    const { path } = useRouteMatch()

    return (
        <div className='page-projects-body'>
            <Container className='mt-5'>
                <div className='pb-4 d-flex'>
                    <Switch>
                        <Route exact path={path + '/*'} render={() =>
                            <Link to={path}>
                                <Button className='d-flex align-items-center'>
                                    <BsArrowLeft className='me-2' />
                                    Projects Home
                                </Button>
                            </Link>
                        } />
                    </Switch>
                </div>
                <Switch location={location}>
                    <Route exact path={path} component={CardGrid} />
                    <Route path={path + "/404"} component={Page404} />
                    <Route path={path + "/hacker"} component={HackerTextDemo} />
                    <Route path={path + "/quotes"} component={Quotes} />
                    <Route path={path + "/pokemon"} component={Pokemon} />
                    <Route exact path={path + "/*"} component={Page404} />
                </Switch>
            </Container >
        </div>
    )
}

export default PageProjects
