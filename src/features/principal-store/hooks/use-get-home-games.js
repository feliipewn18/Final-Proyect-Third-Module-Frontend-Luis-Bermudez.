import { useEffect, useState } from "react"
import { getHomeGamesByOrder } from "../services/get-games-home"

export const useGetHomeGames = () => {

    const [ games, setGames ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        getHomeGamesByOrder()
        .then(setGames)
        .catch(error => setError(error.message))
        .finally(() => setLoading(false))
    }, [])
  return { games, loading, error }
}
