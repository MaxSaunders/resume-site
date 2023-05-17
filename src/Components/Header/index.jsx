import TypeWriter from "../Typewriter"
import avatar from '../../assets/avatar.svg'
import './index.css'

const Header = () => {
    return (
        <div className='header'>
            <span>
                <h1>
                    <TypeWriter
                        staticWord='I am a'
                        textArray={["Web Developer.", "Designer.", "MERN Stack Enjoyer.", "Engineer.", "Thinker."]}
                    />
                </h1>
            </span>
            <span className='avatar'>
                <img src={avatar} className="img-fluid" alt="avatar" />
            </span>
        </div>
    )
}

export default Header
