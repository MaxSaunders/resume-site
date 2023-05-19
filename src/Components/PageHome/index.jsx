import ScrollingSection from './ScrollingSection'
import AboutMe from './AboutMe'
import Header from './Header'

const PageHome = () =>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '94vh' }}>
        <Header />
        <AboutMe />
        <div style={{ marginTop: 'auto' }}>
            <ScrollingSection />
        </div>
    </div>

export default PageHome
