const apiKey = import.meta.env.VITE_API_KEY
const getHomeGames = async (ordering, meta = "") => {
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&ordering=${ordering}&page_size=10${meta}`)
     if(!response.ok) 
        throw new Error("Error getting this game")
    return response.json()

}

export const getHomeGamesByOrder = async () => {
    const[ mostRated, mostWanted, highMetacritic, mostPlayed] = await Promise.all ([
        getHomeGames("-rating", "&metacritic=75,100"),
        getHomeGames("-released", "&metacritic=80,100"),
        getHomeGames("-metacritic", "&metacritic=75,100"),
        getHomeGames("-playtime"),
    ])
    return{ mostRated, mostWanted, highMetacritic, mostPlayed}
    }
