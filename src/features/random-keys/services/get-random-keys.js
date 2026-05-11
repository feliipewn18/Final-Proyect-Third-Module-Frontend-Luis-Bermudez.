export const GetRandomkeys = async () => {
    const response = await fetch('/data/random-keys.json')

    if(!response.ok){
    throw new Error("Error getting this random key...")}

    return response.json()  
}