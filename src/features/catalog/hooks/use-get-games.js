import { useEffect, useState } from "react"
import { getGames } from "../services/get-games"


export const useGetGames = (search = "") => {

    const [ games, setGames ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    const [page, setPage] = useState(1)
   

    const [next, setNext] = useState(null)
    const [prev, setPrev] = useState(null)

    useEffect(() => {
        setTimeout(() => setLoading(true), 0);
        getGames({page, search})
        .then ((game) => {
            setGames(game.results)
            setNext(game.next)
            setPrev(game.previous)
            setLoading(false)
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    },[page, search])
    
    return { games, loading, error, page, setPage, next, prev }
}