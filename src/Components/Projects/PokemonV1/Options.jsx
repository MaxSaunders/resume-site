import { useState, useMemo } from "react"
import PropTypes from 'prop-types'
import { Button, Col, Container, Form, OverlayTrigger, Popover, PopoverBody, Row } from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa"

import useGetSuggestions from './useGetSuggestions'
import pokemon from './pokemon.json'

const Options = ({ guessed, correctAnswer, pokemonNameArray = [], fetchPokemon, guess, difficulty = 'EASY', setShowHint = () => false }) => {
    const nameOptions = useMemo(() => pokemon?.map(p => p?.name?.english?.toUpperCase()), [])
    // TODO: maybe add language options

    const [input, setInput] = useState('')
    const { getSuggestions } = useGetSuggestions(nameOptions, 20, correctAnswer)

    const suggestions = useMemo(() => {
        return getSuggestions(input)
    }, [getSuggestions, input])

    if (guessed) {
        return (
            <Col xs={12}>
                <Button className='w-100 mb-3 pokemon-option' onClick={fetchPokemon}>
                    Get Another
                    <FaArrowRight className='ms-3' />
                </Button>
            </Col>
        )
    }

    if (difficulty == 'HARD') {
        return (
            <Col>
                <Container fluid>
                    <Row>
                        <Col xs={{ span: 6, order: 1 }} md={{ span: 2, order: 1 }} className='mb-2 mb-md-0'>
                            <OverlayTrigger
                                key='hint-button'
                                placement='auto-start'
                                overlay={
                                    <Popover>
                                        <PopoverBody>
                                            <div>
                                                Using a hint will cost you 1/2 a point
                                            </div>
                                        </PopoverBody>
                                    </Popover>
                                }
                            >
                                <Button size='lg' variant='success' className='w-100 fw-bold' onClick={setShowHint}>
                                    HINT
                                </Button>
                            </OverlayTrigger>
                        </Col>
                        <Col xs={{ span: 12, order: 3 }} md={{ span: 8, order: 2 }} className='mb-2 mb-md-0'>
                            <div className='pokemon-option-input'>
                                <OverlayTrigger
                                    trigger='focus'
                                    key='top'
                                    placement='auto-start'
                                    overlay={
                                        <Popover id='input-top' placement="top">
                                            <PopoverBody>
                                                <div className={`pokemon-suggestions pop-up text-dark`}>
                                                    {suggestions?.length ?
                                                        suggestions?.map(s =>
                                                            // this is not working correctly
                                                            <div className='pokemon-suggestion' key={s} onClick={() => setInput(s)}>
                                                                {s}
                                                            </div>
                                                        )
                                                        :
                                                        <div className='pokemon-suggestion' key='no-suggestions'>
                                                            NO SUGGESTIONS
                                                        </div>
                                                    }
                                                </div>
                                            </PopoverBody>
                                        </Popover>
                                    }>
                                    <Form.Control
                                        value={input}
                                        size='lg'
                                        onChange={e => setInput(e.target.value)}
                                        as='input'
                                        placeholder='Guess Here'
                                    />
                                </OverlayTrigger>
                            </div>
                        </Col>
                        <Col xs={{ span: 6, order: 2 }} md={{ span: 2, order: 3 }}>
                            <Button size='lg' className='mb-2 mb-md-0 w-100 fw-bold' onClick={() => guess(input)}>
                                GUESS
                            </Button>
                        </Col>
                    </Row >
                </Container >
            </Col >
        )
    }

    return (
        <>
            {pokemonNameArray?.map(option =>
                option &&
                <Col xs={6} md={3} key={option} className='mb-2 mb-md-0'>
                    <Button className='h-100 w-100 mb-3 pokemon-option' onClick={() => guess(option)}>
                        {option?.toUpperCase()}
                    </Button>
                </Col>
            )}
        </>
    )
}

Options.propTypes = {
    guessed: PropTypes.bool,
    pokemonNameArray: PropTypes.array,
    fetchPokemon: PropTypes.func,
    guess: PropTypes.func,
    setShowHint: PropTypes.func,
    difficulty: PropTypes.string,
    correctAnswer: PropTypes.string,
}

export default Options
