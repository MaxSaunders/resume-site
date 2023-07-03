/* eslint-disable react/prop-types */
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import { BsFillChatLeftQuoteFill, BsArrowLeft } from 'react-icons/bs'
import { SiHackster, SiNintendoswitch, SiPokemon } from 'react-icons/si'
import { TbError404 } from 'react-icons/tb'
import { TiWeatherPartlySunny } from 'react-icons/ti'

import Page404 from '../Page404';
import Quotes from '../Projects/Quotes';
import Pokemon from '../Projects/PokemonV1';
import WeatherApp from '../Projects/Weather';
import SwitchHome from '../Projects/Nintendo';
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
        <ProjectCard title='Name That Pokemon v1' path="pokemon/v1" ChildrenComp={<SiPokemon size='150px' />} />
        <ProjectCard title='Weather App' path="weather" ChildrenComp={<TiWeatherPartlySunny size='150px' />} />
        <ProjectCard title='Switch Home' path="nintendo" ChildrenComp={<SiNintendoswitch size='150px' />} />
    </Row>

const ProjectRoute = ({ exact, fluid = false, path, Comp }) =>
    <Route exact={exact} path={path} render={() =>
        <Container fluid={fluid}>
            <Comp />
        </Container>
    } />

const PageProjects = () => {
    const location = useLocation()
    const { path } = useRouteMatch()

    return (
        <div className='page-projects-body'>
            <div className='pb-4 d-flex'>
                <Switch>
                    <Route exact path={path + '/*'} render={() =>
                        <Container>
                            <Link to={path}>
                                <Button className='d-flex align-items-center'>
                                    <BsArrowLeft className='me-2' />
                                    Projects Home
                                </Button>
                            </Link>
                        </Container>
                    } />
                </Switch>
            </div>
            <Switch location={location}>
                <ProjectRoute exact path={path} Comp={CardGrid} />
                <ProjectRoute path={path + "/404"} Comp={Page404} />
                <ProjectRoute path={path + "/hacker"} Comp={HackerTextDemo} />
                <ProjectRoute path={path + "/quotes"} Comp={Quotes} />
                <ProjectRoute path={path + "/pokemon/v1"} Comp={Pokemon} />
                <ProjectRoute path={path + "/weather"} Comp={WeatherApp} />
                <ProjectRoute path={path + "/nintendo"} Comp={SwitchHome} fluid />
                <ProjectRoute exact path={path + "/*"} Comp={Page404} />
            </Switch>
        </div>
    )
}

export default PageProjects
