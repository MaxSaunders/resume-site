// VscGithub
// MdAlternateEmail
// MdOutlineMail
// FaLinkedinIn
import { VscGithub } from 'react-icons/vsc'
import { BsCircleFill } from 'react-icons/bs'
import './index.scss'

const ContactMe = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='d-flex w-25'>
                <div className='logo-container'>
                    <VscGithub size='25px' className='logo-icon' />
                    <BsCircleFill size='40px' className='mx-1 back-circle' />
                </div>
                <div className='logo-container'>
                    <VscGithub size='25px' className='logo-icon' />
                    <BsCircleFill size='40px' className='mx-1 back-circle' />
                </div>
                <div className='logo-container'>
                    <VscGithub size='25px' className='logo-icon' />
                    <BsCircleFill size='40px' className='mx-1 back-circle' />
                </div>
                <div className='logo-container'>
                    <VscGithub size='25px' className='logo-icon' />
                    <BsCircleFill size='40px' className='mx-1 back-circle' />
                </div>
            </div>
        </div>
    )
}

export default ContactMe
