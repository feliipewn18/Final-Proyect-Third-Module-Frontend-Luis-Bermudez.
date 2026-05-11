import { useEffect, useState } from "react"
import { GetRandomkeys } from "../services/get-random-keys"

export const UseGetRandomKeys = () => {

    const [keys, setKeys] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        GetRandomkeys()
        .then ((keys) => {
            setKeys(keys.cards)
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    })
   
    return { loading, keys, error }
}