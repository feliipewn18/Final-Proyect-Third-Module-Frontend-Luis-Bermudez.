const apiKey = import.meta.env.VITE_API_KEY;

export const getGames = async ({page, search}) => {
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=${page}&search=${search}`)

    if (!response.ok) {
        throw new Error(`Error getting this game`)
    }
    return response.json()
}