/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from 'react'

import './index.scss'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const useHoverMouse = (onHover, shouldHover) => {
    const elementRef = useRef(null)

    useEffect(() => {
        if (shouldHover) {
            const handleClickOutside = ev => {
                if (elementRef.current && elementRef.current.contains(ev.target)) {
                    onHover(ev)
                }
            }

            document.addEventListener('mouseover', handleClickOutside)
            return () => {
                document.removeEventListener('mouseover', handleClickOutside)
            }
        }
    }, [elementRef, onHover, shouldHover])

    return {
        elementRef
    }
}

const HackerText = ({ children, hoverAffect = false, ipl = 8 }) => {
    const title = children?.toUpperCase() || 'title'
    const [innerText, setInnerText] = useState(title)

    let interval = '';

    const hackerize = useCallback(() => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            const newInnerText = title
                .split("")
                .map((_letter, index) => {
                    // The iteration is constantly increasing
                    // e.g. If the ipl is 1
                    // this would move the cursor 1 letter each time
                    if (index < iteration) {
                        return title[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                }).join("");

            setInnerText(newInnerText)
            if (iteration >= title.length) {
                clearInterval(interval);
            }

            // Number of iterations per letter
            iteration += 1 / ipl;

            // Number of iterations per letter
        }, 10);
    }, [title])

    useEffect(() => {
        hackerize()
    }, [])

    const { elementRef } = useHoverMouse(hackerize, hoverAffect)

    return (
        <span ref={elementRef} >
            {innerText}
        </span >
    )
}

const HackerTextDemo = () =>
    <div className='text-light hacker-container title'>
        <div className='text-hacker'>
            {`$ `}
            <HackerText>
                Thank you for visiting my website
            </HackerText>
        </div>
        <div className='text-hacker'>
            {`$ `}
            <HackerText>
                I spent a lot of time recreating this affect
            </HackerText>
        </div>
        <div className='text-hacker'>
            {`$ `}
            <HackerText>
                because I was too stubborn to use a library
            </HackerText>
        </div>
        <div>
            {`$ `}
            <HackerText hoverAffect ipl={15}>
                hover this line to trigger the affect again
            </HackerText>
        </div>
    </div>

export default HackerTextDemo
