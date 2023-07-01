import { useCallback, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { MdFormatQuote } from 'react-icons/md'
import { BsArrowRepeat } from 'react-icons/bs'

import useGetQuotes from './useGetQuotes'
import './index.scss'

const Quotes = () => {
    const { getQuote } = useGetQuotes()
    const [randomQuote, setRandomQuote] = useState({ content: '', author: '', tags: [] })
    const [loading, setLoading] = useState(false)
    const { content, author, tags } = randomQuote

    const fetchQuote = useCallback(() => {
        setLoading(true)
        getQuote().then(res => {
            setRandomQuote(res)
        }).catch(err => {
            console.error({ err })
        })
        setLoading(false)
    }, [getQuote])

    // const fetchMovieQuote = useCallback(() => {
    //     getMovieQuote().then(res => {
    //         console.log({ res })
    //         setMovieQuote(res)
    //     }).catch(err => {
    //         console.error({ err })
    //     })
    // }, [getMovieQuote])

    // fetchMovieQuote()

    useEffect(() => {
        fetchQuote()
    }, [])

    return (
        <>
            {/* <div className='tag-grid mt-3 ms-2'>
                {tags?.map(tag =>
                    <span className='tag-item' key={tag}>
                        {tag}
                    </span>
                )}
            </div> */}
            <Card className='quote-wrapper'>
                <Card.Body>
                    {loading ?
                        <BsArrowRepeat className={`ms-2 loading-true`} />
                        :
                        <>
                            <div>
                                <span className='quote-mark-left d-inline-flex'>
                                    <MdFormatQuote />
                                </span>
                                <strong>
                                    {`  ${content}  `}
                                </strong>
                                <span className='quote-mark-right d-inline-flex'>
                                    <MdFormatQuote />
                                </span>
                            </div>
                            <div className='mt-3 text-end author-footer'>
                                {`${'\u2014'} ${author}`}
                            </div>

                            <div className='tag-grid mt-3 ms-2'>
                                {tags?.map(tag =>
                                    <span className='tag-item' key={tag}>
                                        {tag}
                                    </span>
                                )}
                            </div>
                        </>
                    }
                </Card.Body>
                <hr className='mx-3' />
                <div className='button-wrapper align-self-end author-footer px-3 pb-2'>
                    <Button className='py-2 d-flex align-items-center' onClick={fetchQuote}>
                        Get New Quote
                        <BsArrowRepeat className={`ms-2 loading-${loading}`} />
                    </Button>
                </div>
            </Card>
        </>
    )
}

export default Quotes
