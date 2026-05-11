import { useEffect, useState } from "react"
import { getGamesById, getGameScreenshotsId } from "../services/get-game-by-id"

export const useGetGamesById = (id) => {
  
    const [ games, setGames ] = useState({})

    const [ screenshots, setScreenshots] = useState([])

    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    

    useEffect(() => {
        getGamesById(id)
        .then(setGames)
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))

        getGameScreenshotsId(id)
        .then(screenshots => setScreenshots(screenshots.results))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    }, [id])

  return {
    games,
    screenshots,
    loading,
    error
  }
}
