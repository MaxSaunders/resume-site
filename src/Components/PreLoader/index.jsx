import PropTypes from 'prop-types'
import TypeWriter from '../Typewriter'
import './index.scss'

const PreLoader = ({ loading = false }) =>
    <div className={`loading-page ${loading ? 'display-in' : 'display-fade-out'}`}>
        <div className='loading-content'>
            <TypeWriter
                secondsPerChar={.05}
                textArray={[
                    `[Suspenseful Music Plays]...`
                ]}
            />
        </div>
    </div>

PreLoader.propTypes = {
    loading: PropTypes.boolean
}

export default PreLoader
