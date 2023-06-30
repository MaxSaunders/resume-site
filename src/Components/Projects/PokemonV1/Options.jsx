import { useState, useMemo } from "react"
import PropTypes from 'prop-types'
import { Button, Col, Container, Form, OverlayTrigger, Popover, PopoverBody, Row } from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa"

import useGetSuggestions from './useGetSuggestions'
import pokemon from './pokemon.json'

const Options = ({ guessed, pokemonNameArray = [], fetchPokemon, guess, difficulty = 'EASY', setShowHint = () => false }) => {
    const nameOptions = useMemo(() => pokemon?.map(p => p?.name?.english?.toUpperCase()), [])
    // TODO: maybe add language options

    const [input, setInput] = useState('')
    const { getSuggestions } = useGetSuggestions(nameOptions, 30)

    const suggestions = useMemo(() => getSuggestions(input), [input, getSuggestions])

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
                        <Col xs={12} md={2} className='mb-3 mb-md-0'>
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
                        <Col xs={12} md={8} className='mb-3 mb-md-0'>
                            <div className='pokemon-option-input'>
                                <OverlayTrigger
                                    trigger='focus'
                                    key='top'
                                    placement='auto-start'
                                    overlay={
                                        <Popover id='input-top'>
                                            <PopoverBody>
                                                <div className={`pokemon-suggestions text-dark`}>
                                                    {suggestions?.length ?
                                                        suggestions?.map(s =>
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
                        <Col xs={12} md={2}>
                            <Button size='lg' className='w-100 fw-bold' onClick={() => guess(input)}>
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
                <Col xs={12} md={3} key={option}>
                    <Button className='w-100 mb-3 pokemon-option' onClick={() => guess(option)}>
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
    difficulty: PropTypes.string
}

export default Options
