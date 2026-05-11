export const DisplayMetacriticOpinion =  ( { metacritic } ) => {
    
    if(!metacritic) return <div className="bg-black px-3 rounded-lg text-white justify-center">???</div>
    if(metacritic >= 75) return <div className="bg-green-500 px-3 rounded-lg "> {metacritic} </div>
    if(metacritic >= 50) return <div className="bg-yellow-500 px-3 rounded-lg">{metacritic}</div>
    if(metacritic <= 49) return <div className="bg-red-500 px-3 rounded-lg"> {metacritic}</div>
 
    return <div className="bg-black px-3 rounded-lg text-white justify-center font-medium">???</div>

}

export const DisplayMetacriticOpinionId =  ( { metacritic } ) => {
    
    if(!metacritic) return <div className="bg-black px-3 rounded-lg text-white justify-center font-medium">???</div>
    if(metacritic >= 75) return <div className="bg-green-600 px-4 text-xl rounded-lg font-medium" > {metacritic} </div>
    if(metacritic >= 50) return <div className="bg-yellow-500 px-4 text-xl rounded-lg font-medium">{metacritic}</div>
    if(metacritic <= 49) return <div className="bg-red-500 px-4 text-xl rounded-lg font-medium"> {metacritic}</div>

    return <div className="bg-black px-3 rounded-lg text-white justify-center font-medium">???</div>

}