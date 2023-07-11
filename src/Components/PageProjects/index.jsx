/* eslint-disable react/prop-types */
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom'
import { SiHackster, SiNintendoswitch, SiPokemon } from 'react-icons/si'
import {
    // BsArrowsFullscreen,
    BsFillChatLeftQuoteFill,
    BsTable,
} from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { AiOutlineDashboard } from 'react-icons/ai';
import { TbError404 } from 'react-icons/tb'
import { HiHome } from 'react-icons/hi'
import SimpleBarReact from 'simplebar-react'

import Page404 from '../Page404';
import Table from '../Projects/Table'
import Quotes from '../Projects/Quotes';
import Pokemon from '../Projects/PokemonV1';
import AdminPortal from '../Projects/Admin';
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
    <SimpleBarReact className='projects-scrollbar'>
        <Row className='card-grid'>
            <ProjectCard title='404 Page' path='404' ChildrenComp={<TbError404 size='150px' />} />
            <ProjectCard title='Hacker Text' path='hacker' ChildrenComp={<SiHackster size='150px' />} />
            <ProjectCard title='Quotes' path='quotes' ChildrenComp={<BsFillChatLeftQuoteFill size='150px' />} />
            <ProjectCard title='Name That Pokemon v1' path='pokemon/v1' ChildrenComp={<SiPokemon size='150px' />} />
            <ProjectCard title='Weather App' path='weather' ChildrenComp={<TiWeatherPartlySunny size='150px' />} />
            <ProjectCard title='Switch Home' path='nintendo' ChildrenComp={<SiNintendoswitch size='150px' />} />
            <ProjectCard title='Admin Dashboard' path='dashboard' ChildrenComp={<AiOutlineDashboard size='150px' />} />
            <ProjectCard title='Table Demo' path='table' ChildrenComp={<BsTable size='150px' />} />
        </Row>
    </SimpleBarReact>

const ProjectRoute = ({ exact, fluid = false, path, Comp }) =>
    <Route exact={exact} path={path} render={() =>
        <Container fluid={fluid}>
            <Comp />
        </Container>
    } />

const PageProjects = () => {
    const location = useLocation()
    const { path } = useRouteMatch()

    // const projectPathName = location.pathname.split('/').pop()

    return (
        <div className='page-projects-body'>
            <div className='p-3 d-flex'>
                <Switch>
                    <Route exact path={path + '/*'} render={() =>
                        <Container>
                            <Row className='project-body-buttons'>
                                <Col xs={12} md={4} lg={3} className=''>
                                    <Link to={path}>
                                        <Button className='w-100 d-flex align-items-center justify-content-between fs-5'>
                                            <HiHome className='me-2' size='24px' />
                                            <div className='d-flex align-items-center justify-content-center w-100'>
                                                Projects Home
                                            </div>
                                        </Button>
                                    </Link>
                                </Col>
                                {/* <Col xs={12} md={4} lg={3} className='mb-md-0'>
                                    <Link to={`/${projectPathName}`}>
                                        <Button className='w-100 d-flex align-items-center justify-content-between fs-5'>
                                            <BsArrowsFullscreen className='me-2' size='24px' />
                                            <div className='d-flex align-items-center justify-content-center w-100'>
                                                Fullscreen
                                            </div>
                                        </Button>
                                    </Link>
                                </Col> */}
                            </Row>
                        </Container>
                    } />
                </Switch>
            </div>
            <Switch location={location}>
                <ProjectRoute exact path={path} Comp={CardGrid} />
                <ProjectRoute path={path + '/404'} Comp={Page404} />
                <ProjectRoute path={path + '/hacker'} Comp={HackerTextDemo} />
                <ProjectRoute path={path + '/quotes'} Comp={Quotes} />
                <ProjectRoute path={path + '/pokemon/v1'} Comp={Pokemon} />
                <ProjectRoute path={path + '/weather'} Comp={WeatherApp} />
                <ProjectRoute path={path + '/nintendo'} Comp={SwitchHome} fluid />
                <ProjectRoute path={path + '/dashboard'} Comp={AdminPortal} />
                <ProjectRoute path={path + '/table'} Comp={Table} fluid />
                <ProjectRoute exact path={path + '/*'} Comp={Page404} fluid />
            </Switch>
        </div>
    )
}

export default PageProjects
