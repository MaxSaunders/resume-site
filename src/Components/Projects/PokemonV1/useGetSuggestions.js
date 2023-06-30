import { useCallback } from "react"

const useGetSuggestions = (options, limit = 10) => {

    const getSuggestions = useCallback(guess => {
        let size = 0
        return options?.filter(o => {
            if (size < limit) {
                if (o?.toUpperCase()?.includes(guess?.toUpperCase())) {
                    size++
                    return true
                }
            }
        })
    }, [limit, options])

    return {
        getSuggestions
    }
}

export default useGetSuggestions
