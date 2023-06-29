import axios from "axios"
import { useCallback } from "react"
import { getRandomInt } from "../../../utils/getRandom"

const POKE_API_URL = 'https://pokeapi.co/api/v2'

const useGetPokemon = () => {

    const getPokemonList = useCallback(() => {
        return axios({
            method: 'get',
            url: POKE_API_URL + '/pokemon/',
            responseType: 'json',
            headers: {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': 'true',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then(res => {
            return res?.data
        }).catch(e => {
            console.log(e)
        })
    }, [])

    const getPokemon = useCallback(index => {
        return axios({
            method: 'get',
            url: POKE_API_URL + '/pokemon/' + index,
            responseType: 'json',
            headers: {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': 'true',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then(res => {
            return res?.data
        }).catch(e => {
            console.log(e)
        })
    }, [])

    const getRandomPokemon = useCallback(() => {
        return getPokemonList().then(() => {
            // const pokeCount = res?.count
            // not sure what the problem is here
            // the api returns more indicies then there are pokemon entries
            const pokeCount = 1010
            const pokeIndex = getRandomInt(1, pokeCount + 1)
            return getPokemon(pokeIndex)
        })
    }, [getPokemon, getPokemonList])

    return {
        getPokemon,
        getPokemonList,
        getRandomPokemon
    }
}

export default useGetPokemon
