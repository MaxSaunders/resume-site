import { useState } from 'react'
import propTypes from 'prop-types'
import './index.scss'

const SelectInputField = ({ label = '', options = [] }) => {
    const [showSuggestions, setShowSuggestions] = useState(false)

    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-input"
                    onClick={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                >
                    <div className="dropdown-selected-value">
                        {/* {getDisplay()} */}
                        {label}
                    </div>
                    <div className="dropdown-tools">
                        <div className="dropdown-tool">
                            Hello
                            {/* <Icon /> */}
                        </div>
                    </div>
                </div>
                <div className='dropdown-menu'>
                    {options.map(({ value, label }) =>
                        <div key={value} className='dropdown-item'>
                            {label}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

SelectInputField.propTypes = {
    label: propTypes.string,
    options: propTypes.array,
}

export default SelectInputField
