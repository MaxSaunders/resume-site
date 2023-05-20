/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './index.scss'

const Tab = ({ activeTab, setTab, tabIndex, name }) =>
    <Nav.Item className='project-tab-item'>
        <Nav.Link className='project-tab-link' active={activeTab == tabIndex} onClick={() => setTab(tabIndex)}>
            {name}
        </Nav.Link>
    </Nav.Item>


const PageProjects = () => {
    const [tab, setTab] = useState(0)

    return (
        <Nav fill variant="tabs" className='mt-5'>
            <Tab setTab={setTab} activeTab={tab} tabIndex={0} name='Tab 1' />
            <Tab setTab={setTab} activeTab={tab} tabIndex={1} name='Tab 2' />
            <Tab setTab={setTab} activeTab={tab} tabIndex={2} name='Tab 3' />
        </Nav>
    )
}

export default PageProjects
