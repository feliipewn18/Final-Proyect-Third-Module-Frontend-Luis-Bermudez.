const apiKey = import.meta.env.VITE_API_KEY;

export const getGamesById = async ( id ) => {
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)
    if(!response.ok)
        throw new Error("Error getting information about this game :(")
    return response.json()
}

export const getGameScreenshotsId = async (id) => {
    const screenshotsresponse = await fetch (`https://api.rawg.io/api/games/${id}/screenshots?key=${apiKey}`)
    if(!screenshotsresponse.ok)
    throw new Error("Error getting screenshots of this game :(")
    return screenshotsresponse.json()
}