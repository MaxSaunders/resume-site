import { useRef, useState } from 'react'
import ContactMe from '../../ContactMe'
import './index.scss'

const AboutMe = () => {
    const [show, setShow] = useState(false)

    const readMoreRef = useRef(null)
    const toggleShow = async () => {
        await setShow(i => !i)
        setTimeout(() => {
            scrollIntoView()
        }, 100)
    }

    const scrollIntoView = () => readMoreRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    return (
        <div className='about-me-container section'>
            <div>

                <h1>
                    <span>LET ME </span>
                    <span className='primary-purple'>INTRODUCE </span>
                    <span>MYSELF</span>
                </h1>
                <div className='text-start mb-0 fs-5'>
                    <div className='mb-4'>
                        {`Welcome to my profile website! I'm a software developer passionate about crafting innovative solutions.`}
                    </div>
                    <div className='mb-4'>
                        {`With a strong background in programming and a commitment to delivering high-quality work, `}
                        <div className='primary-purple fw-bold fst-italic'>
                            {`I'm dedicated to exceeding expectations.`}
                        </div>
                    </div>
                    <div className='mb-4'>
                        {`Explore my projects and resume to discover how I can contribute to your organization's success. `}
                        <div className='primary-purple fw-bold fst-italic'>
                            {`Let's create something extraordinary together.`}
                        </div>
                        <div className='read-more-button' onClick={toggleShow}>
                            READ MORE
                        </div>
                    </div>
                </div>

                <div className={`read-more show-${show}`}>
                    <div ref={readMoreRef} className='text-start mb-0'>
                        <div className='mb-3'>
                            {`As a passionate software developer,
                        I am thrilled to showcase my skills and experience in the world of programming.`}
                        </div>
                        <div className='mb-3'>
                            {`Whether you're an employer seeking a dedicated professional or a curious visitor interested in learning more about my expertise, you've come to the right place.`}
                        </div>
                        <div className='mb-3'>
                            {` I believe in the power of collaboration and continuous learning.
                        By staying up-to-date with the latest industry trends and technologies,
                        I strive to enhance my skills and deliver the most efficient and reliable solutions.
                        I am eager to work in an environment that encourages growth, creativity, and fosters a strong sense of teamwork.`}
                        </div>
                        <div style={{ whiteSpace: 'pre-line' }}>
                            {`Thank you for taking the time to explore my profile website.
                        I invite you to browse through my resume, projects, the rest of the site to gain a comprehensive understanding of my capabilities.
                        If you have any inquiries or would like to discuss potential opportunities, please don't hesitate to reach out. `}
                        </div>
                        <div className='mb-3'>
                            {`You can reach me at `}
                            <a className='primary-purple email-link d-inline fw-bold' href={`mailto:max@saunders.wiki`} style={{ cursor: 'pointer' }}>
                                {`max@saunders.wiki. `}
                            </a>
                        </div>
                        <div>
                            {`I look forward to connecting with you and exploring how I can contribute to your organization's success.
                        Remember, in the ever-evolving world of software development, innovation and collaboration are key, 
                        and I'm ready to embark on exciting ventures with like-minded individuals and companies. `}
                            <div className='primary-purple fw-bold'>
                                {`Let's Build a Bright Future Together, One Project at a Time.`}
                            </div>
                        </div>
                    </div>
                    <div>
                        <ContactMe />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
