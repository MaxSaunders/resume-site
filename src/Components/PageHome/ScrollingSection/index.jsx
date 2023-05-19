/* eslint-disable react/prop-types */
import './index.scss'

const TAGS = [
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'Tailwind',
    'React',
    'Next.js',
    'Leadership',
    'UI/UX',
    'Jira',
    'MERN',
    'webdev',
    'JAVA'
];
const DURATION = 100000;
const ROWS = 3;
const TAGS_PER_ROW = 15;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) =>
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
    }}>
        <div className='inner'>
            {children}
            {children}
        </div>
    </div>

const Tag = ({ text }) =>
    <div className='tag'><span>#</span> {text}</div>

const ScrollingSection = () =>
    <div className='scrolling-app'>
        <div className='tag-list mx-0'>
            {[...new Array(ROWS)].map((_, i) => (
                <InfiniteLoopSlider key={i} duration={random(DURATION, DURATION + 10000)} reverse={i % 2}>
                    {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
                        <Tag text={tag} key={tag} />
                    ))}
                </InfiniteLoopSlider>
            ))}
            <div className='fade-in-section' />
        </div>
    </div>

export default ScrollingSection
