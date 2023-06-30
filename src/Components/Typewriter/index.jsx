import { useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TypeWriter = ({
    staticWord = '',
    textArray = [],
    cursor = '|',
    loop = false,
    secondsPerChar = .25,
    secondsBetweenWords = 3.5
}) => {
    const textArr = useMemo(() => textArray, [textArray])
    const [printedText, setPrintedText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isClear, setIsClear] = useState(true)

    const typing = useCallback((newChar) => {
        setPrintedText(i => {
            return `${i || ''}${newChar}`
        })
    }, [setPrintedText])

    const deleting = useCallback(() => {
        setPrintedText(text => {
            return text.substring(0, text?.length - 1)
        })
    }, [setPrintedText])

    const deleteAll = useCallback(() => {
        setTimeout(() => {
            let i = 0
            const _deleteAll = setInterval(() => {
                if (i < textArr[wordIndex]?.length) {
                    deleting()
                    i++
                } else {
                    // Hit end of the word
                    setWordIndex(wi => {
                        if (wi >= textArr?.length - 1) {
                            // Hit the end of word array
                            return 0
                        } else {
                            return wi + 1
                        }
                    })
                    setCharIndex(0)
                    setIsClear(true)
                    clearInterval(_deleteAll)
                }
            }, (secondsPerChar * .3) * 1000)
        }, secondsBetweenWords * 1000)
        // Set delay between words before deleting
    }, [textArr, wordIndex, secondsPerChar, secondsBetweenWords, deleting, setIsClear, setCharIndex])

    useEffect(() => {
        const _type = setInterval(() => {
            if (textArr?.length) {
                if (isClear) {
                    if (printedText?.length >= textArr[wordIndex]?.length) {
                        if (!loop && wordIndex >= textArr?.length - 1) {
                            clearInterval(_type)
                        } else {
                            setIsClear(false)
                            deleteAll()
                        }
                    } else {
                        typing(textArr?.[wordIndex]?.[charIndex])
                        setCharIndex(i => i + 1)
                    }
                }
            } else {
                clearInterval(_type)
            }
        }, secondsPerChar * 1000)

        return () => clearInterval(_type)
    }, [textArr, wordIndex, charIndex, printedText, isClear, secondsPerChar, loop, setIsClear, typing, deleteAll])

    return (
        <span className="typewriter">
            {`${staticWord} `}
            <span>
                <span className='primary-purple'>
                    {printedText}
                </span>
                <span className='cursor-blink'>
                    {cursor}
                </span>
            </span>
        </span>
    )
}

TypeWriter.propTypes = {
    staticWord: PropTypes.string,
    textArray: PropTypes.array,
    cursor: PropTypes.string,
    loop: PropTypes.bool,
    secondsPerChar: PropTypes.number,
    secondsBetweenWords: PropTypes.number,
}

export default TypeWriter
