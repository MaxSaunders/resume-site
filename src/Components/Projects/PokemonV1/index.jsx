/* eslint-disable react/prop-types */
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState, useCallback } from 'react'
import { ImSpinner5 } from 'react-icons/im'

import useGetPokemon from './useGetPokemon'
import Options from './Options'
import Header from './Header'
import Hints from './Hints'
import title from './pokemonTitle.png'
import './index.scss'

const PokemonGame = ({ difficulty, exitGame }) => {
    const { getRandomPokemon } = useGetPokemon()
    const [pokemon, setPokemon] = useState({})
    const [pokemonNameArray, setPokemonNameArray] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingOptions, setLoadingOptions] = useState(false)
    const [hidden, setHidden] = useState(true)
    const [correct, setCorrect] = useState(true)
    const [guessed, setGuessed] = useState(false)
    const [prevGuess, setPrevGuess] = useState('')
    const [streak, setStreak] = useState(0)
    const [showHint, setShowHint] = useState(false)

    const resetState = useCallback(() => {
        setStreak(0)
        setCorrect(true)
        setHidden(true)
        setShowHint(false)
        setGuessed(false)
    }, [])

    const fetchRandomPokemonName = useCallback(() => {
        getRandomPokemon(3).then(res => {
            setPokemonNameArray(i => [...i, ...res.map(p => p.name)]?.sort())
        })
    }, [getRandomPokemon])

    const fetchPokemon = useCallback(() => {
        setShowHint(false)
        setLoadingOptions(true)
        setLoading(true)
        setGuessed(false)
        setHidden(true)
        setPokemonNameArray([])

        if (difficulty == 'EASY') {
            fetchRandomPokemonName()
        }

        getRandomPokemon().then(res => {
            const pokeRes = res[0]
            setPokemon(pokeRes)
            setPokemonNameArray(i => [...i, pokeRes?.name]?.sort())

            if (!pokeRes?.name) {
                fetchPokemon()
            }
        }).then(() => setLoading(false))
    }, [difficulty, fetchRandomPokemonName, getRandomPokemon])

    // add generation to this info
    const { name, sprites } = pokemon || {}
    const imgUrl = sprites?.other?.['official-artwork'].front_default

    const _setShowHint = () => {
        setShowHint(true)
    }

    const guess = useCallback(guessOption => {
        setPrevGuess(guessOption)
        setGuessed(true)
        if (guessOption?.toUpperCase() == name?.toUpperCase()) {
            setCorrect(true)
            if (showHint) {
                setStreak(i => i + 0.5)
            } else {
                setStreak(i => i + 1)
            }
        } else {
            setCorrect(false)
        }
        setHidden(false)
    }, [name, showHint])

    const resetGame = useCallback(() => {
        resetState()
        fetchPokemon()
    }, [fetchPokemon, resetState])

    useEffect(() => {
        fetchPokemon()
    }, [])

    useEffect(() => {
        if (difficulty == 'EASY') {
            if (pokemonNameArray?.length === 4) {
                setLoadingOptions(false)
            }
        } else {
            if (pokemonNameArray?.length === 1) {
                setLoadingOptions(false)
            }
        }
    }, [difficulty, pokemonNameArray])

    if (loading || loadingOptions) {
        return (
            <Container className='pokemon-game'>
                <Row>
                    <Col xs={12}>
                        <h1 className='pokemon-title'>
                            <img src={title} className='mw-100' />
                        </h1>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col xs={12}>
                        <ImSpinner5 size='60%' className='loading-spinner text-danger' color='black' />
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Container className='pokemon-game'>
            <Row>
                <Header difficulty={difficulty} exitGame={exitGame} correct={correct} resetGame={resetGame} streak={streak} fetchPokemon={fetchPokemon} />
            </Row>
            <Row>
                <Col xs={12}>
                    {hidden ?
                        <span className='mt-4 pokemon-name'>&nbsp;&nbsp;</span>
                        :
                        <span className={`mt-4 pokemon-name guess-${correct}`}>
                            {name?.toUpperCase()}
                        </span>
                    }
                </Col>
                <Col className='mb-5' xs={12} onDragStart={e => e.preventDefault()}>
                    <img onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()} className={`pokemon-picture hidden-${hidden}`} src={imgUrl} />
                </Col>
            </Row >
            {showHint && <Hints pokemon={pokemon} />}
            <Row>
                {correct ?
                    <Options setShowHint={_setShowHint} difficulty={difficulty} guessed={guessed} pokemonNameArray={pokemonNameArray} fetchPokemon={fetchPokemon} guess={guess} />
                    :
                    <div className='pokemon-name guess-false'>
                        {`You guessed: ${prevGuess}`}
                    </div>
                }
            </Row >
        </Container >
    )
}

const Pokemon = () => {
    const [difficulty, setDifficulty] = useState('')

    if (!difficulty) {
        return (
            <Container className='pokemon-menu'>
                <Row>
                    <Col className='mb-5'>
                        <img src={title} className='mw-100' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text-dark mb-5 fw-bold'>
                            Please pick a difficulty:
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='menu-btn mb-4' onClick={() => setDifficulty('EASY')}>
                            EASY
                        </Button>
                    </Col>
                    <Col>
                        <Button className='menu-btn' onClick={() => setDifficulty('HARD')}>
                            HARD
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <PokemonGame difficulty={difficulty} exitGame={() => setDifficulty('')} />
    )
}

export default Pokemon
