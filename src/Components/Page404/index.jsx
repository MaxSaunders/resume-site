import { Link } from "react-router-dom"
import './index.scss'

const Page404 = () =>
    // TODO: add typewriter effect to the code here
    <ol className='console-box fs-2'>
        <li className="text-success fw-bold console-header">
            <span>
                &lt;!---&emsp;&emsp;&emsp;
            </span>
            <span>
                404 page not found
            </span>
            <span>
                &emsp;&emsp;&emsp;---&gt;
            </span>
        </li>
        <li>&emsp;</li>
        <li>
            <span className="fw-bold text-purple">
                {`if (`}
            </span>
            <span className='fw-bold'>
                {`!`}
            </span>
            <span className='fw-bold text-info'>
                {`found`}
            </span>
            <span className='fw-bold text-purple'>
                {`) { `}
            </span>
        </li>
        <li>
            <span className="fw-bold text-purple">
                &emsp;&emsp;&emsp;&emsp;{`throw `}
            </span>
            <span className='text-primary fw-bold'>
                {`(`}
            </span>
            <span className='text-orange'>
                {`"(╯°□°)╯︵ ┻━┻"`}
            </span>
            <span className='text-primary fw-bold'>
                {`)`}
            </span>
            <span>
                {`;`}
            </span>
        </li>
        <li>
            <span className="text-purple fw-bold">
                {`}`}
            </span>
        </li>
        <li>&emsp;</li>
        <li>
            <span>
                <Link to='/' className='home-link text-success fw-bold'>
                    {`// Go home! `}
                    <span className='arrow'>
                        {`<-----`}
                    </span>
                    <span className='click-here'>
                        {` Click Here`}
                    </span>
                </Link>
            </span>
        </li>
    </ol>

export default Page404
