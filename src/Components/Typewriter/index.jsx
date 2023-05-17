import { useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TypeWriter = ({
    staticWord = '',
    textArray = [],
    cursor = '|'
}) => {
    const textArr = useMemo(() => textArray, [textArray])

    const sPerChar = .25
    const sBetweenWords = 4.5

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
            }, (sPerChar * .3) * 1000)
        }, sBetweenWords * 1000)
        // Set delay between words before deleting
    }, [textArr, wordIndex, sBetweenWords, deleting, setIsClear, setCharIndex])

    useEffect(() => {
        const _type = setInterval(() => {
            if (isClear) {
                if (printedText?.length >= textArr[wordIndex]?.length) {
                    setIsClear(false)
                    deleteAll()
                } else {
                    typing(textArr?.[wordIndex]?.[charIndex])
                    setCharIndex(i => i + 1)
                }
            }
        }, sPerChar * 1000)

        return () => clearInterval(_type)
    }, [textArr, wordIndex, charIndex, printedText, isClear, setIsClear, typing, deleteAll])

    return (
        <div className="typewriter">
            {`${staticWord} `}
            <div>
                {printedText}
                <span className='cursor-blink'>
                    {cursor}
                </span>
            </div>
        </div>
    )
}

TypeWriter.propTypes = {
    staticWord: PropTypes.string,
    textArray: PropTypes.array,
    cursor: PropTypes.string
}

export default TypeWriter
