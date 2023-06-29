/* eslint-disable react/prop-types */
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState, useCallback } from 'react'
import { BsArrowRepeat } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'

import useGetPokemon from './useGetPokemon'
import './index.scss'

const Header = ({ resetGame, correct, streak = 0 }) =>
    <>
        <Col xs={12} md={6}>
            {correct ?
                <div className='mb-xs-2 mb-md-0 game-option justify-content-center d-inline-flex align-items-center'>
                    &nbsp;
                    &nbsp;
                </div>
                :
                <Button className='mb-xs-2 mb-md-0 game-option justify-content-center d-inline-flex align-items-center' onClick={resetGame}>
                    Restart
                </Button>
            }
        </Col>
        <Col xs={12} md={6} className='streak-counter d-flex align-items-center justify-content-center '>
            <div>
                <span className='me-2'>
                    STREAK:
                </span>
                <span>
                    {streak}
                </span>
            </div>
        </Col>
    </>

const Options = ({ guessed, pokemonNameArray, fetchPokemon, guess }) =>
    <>
        {guessed ?
            <>
                < Col xs={12}>
                    <Button className='w-100 mb-3 pokemon-option' onClick={fetchPokemon}>
                        Get Another
                        <FaArrowRight className='ms-3' />
                    </Button>
                </Col>
            </>
            :
            pokemonNameArray?.map(option =>
                <Col xs={12} md={3} key={option}>
                    <Button className='w-100 mb-3 pokemon-option' onClick={() => guess(option)}>
                        {option?.toUpperCase()}
                    </Button>
                </Col>
            )}
    </>

const Pokemon = () => {
    const { getRandomPokemon } = useGetPokemon()
    const [pokemon, setPokemon] = useState({})
    const [pokemonNameArray, setPokemonNameArray] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingOptions, setLoadingOptions] = useState(false)
    const [hidden, setHidden] = useState(true)
    const [correct, setCorrect] = useState(true)
    const [guessed, setGuessed] = useState(false)
    const [streak, setStreak] = useState(0)

    const fetchPokemonName = useCallback(() => {
        getRandomPokemon().then(res => {
            setPokemonNameArray(i => [...i, res?.name])
        })
    }, [getRandomPokemon])

    const fetchPokemonNames = useCallback(() => {
        // TODO: make this so that it fetched other names than the one i chose
        fetchPokemonName()
        fetchPokemonName()
        fetchPokemonName()
    }, [fetchPokemonName])

    const fetchPokemon = useCallback(() => {
        setLoadingOptions(true)
        setLoading(true)
        setHidden(true)
        setGuessed(false)
        setPokemonNameArray([])
        fetchPokemonNames()

        getRandomPokemon().then(res => {
            setPokemon(res)
            setPokemonNameArray(i => [...i, res?.name])

            if (!res?.name) {
                fetchPokemon()
            }
        }).then(() => setLoading(false))
    }, [fetchPokemonNames, getRandomPokemon])

    // add generation to this info
    const { name, sprites } = pokemon || {}
    // const { id, name, types, height, weight, sprites } = pokemon || {}
    const imgUrl = sprites?.other?.['official-artwork'].front_default

    const guess = useCallback(guessOption => {
        setGuessed(true)
        if (guessOption == name) {
            setCorrect(true)
            setStreak(i => i + 1)
        } else {
            setCorrect(false)
        }
        setHidden(false)
    }, [name])

    const resetGame = useCallback(() => {
        setCorrect(true)
        setStreak(0)
        fetchPokemon()
    }, [fetchPokemon])

    useEffect(() => {
        fetchPokemon()
    }, [])

    useEffect(() => {
        if (pokemonNameArray?.length === 4) {
            setLoadingOptions(false)
        }
    }, [pokemonNameArray])

    if (loading || loadingOptions) {
        return (
            <Container className='pokemon-game'>
                <Row>
                    <Header correct={correct} resetGame={resetGame} streak={streak} fetchPokemon={fetchPokemon} />
                    <Col>
                        <BsArrowRepeat className='loading-spinner' size='475px' color='black' />
                        {/* <MdCatchingPokemon className='pokemon-logo-spinner' color='red' size='150px' /> */}
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Container className='pokemon-game'>
            <Row>
                <Header correct={correct} resetGame={resetGame} streak={streak} fetchPokemon={fetchPokemon} />
                <Col xs={12}>
                    {hidden ?
                        <span className='mt-4 pokemon-name'>&nbsp;&nbsp;</span>
                        :
                        <span className={`mt-4 pokemon-name guess-${correct}`}>
                            {name?.toUpperCase()}
                        </span>
                    }
                </Col>

                <Col className='mb-5' xs={12}>
                    <img className={`pokemon-picture hidden-${hidden}`} src={imgUrl} />
                </Col>

                {correct ?
                    <Options guessed={guessed} pokemonNameArray={pokemonNameArray} fetchPokemon={fetchPokemon} guess={guess} />
                    :
                    <></>
                }
            </Row >
        </Container >
    )
}

export default Pokemon
