export const generatePrices  = (metacritic) => {

    if(!metacritic) return 5.99
    if(metacritic >= 75) return 14.99
    if(metacritic >= 50) return  8.99
    if(metacritic <= 49) return  3.99

  return (5.99)
}