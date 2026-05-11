import deathStrandingHeroPort from "../../../assets/death-stranding-port.jpg"
import { SkeletonPageHome } from "../components/skeleton-home/skeleton-page"
import { HighOnMetacritic } from "../components/games-components/high-on-metacritic"
import { useGetHomeGames } from "../hooks/use-get-home-games"
import { FetchErrorHome } from "../components/skeleton-home/fetch-error"
import { MostTimePlayed } from "../components/games-components/most-time-played"
import { MostWanted } from "../components/games-components/most-wanted"
import { MostRated } from "../components/games-components/most-rated"
import { useNavigate } from "react-router"


export function HomePage() {
   const navigate = useNavigate()

 const handleNavigate = () => {
    navigate(`/catalog`)
 }

  const { games, loading, error} = useGetHomeGames()

  if(loading) return <SkeletonPageHome/>
  if(error) return <FetchErrorHome/>

  return (
    <div className="flex flex-col ">

      <div className="flex justify-center relative">
      <img className="w-full object-cover h-130 opacity-80" src={deathStrandingHeroPort} alt="Death Stranding 2 Port Hero"/>

      <div className="absolute text-white flex flex-col gap-4 left-40 top-30 justify-center" >
        <h2 className="text-5xl leading-snug font-medium ">
          Not sure <br/>
          what to buy? <br/>
          Perfect.
        </h2>
        <button onClick={handleNavigate} className="text-3xl font-medium bg-black text-white px-5 py-3 rounded-lg max-w-53 cursor-pointer transition-transform duration-200 hover:-translate-y-1"  style={{fontFamily: 'Inter, sans-serif'}}>
          I'm flexible
        </button>
      </div>

      </div>

        <div className="flex flex-col gap-5 mt-5 mb-7 mx-auto">

          <div className="flex flex-col xl:justify-center lg:justify-center max-w-200  lg:max-w-250 gap-4">
            <h2 className="text-white text-2xl font-medium flex justify-start">Most Recent</h2>
            <div className="flex justify-center"><MostWanted games={games.mostWanted?.results}/></div>
          </div>

          <div className="flex flex-col justify-center max-w-250 gap-4">
            <h2 className="text-white text-2xl font-medium">Most Rated</h2>
            <div><MostRated games={games.mostRated?.results}/></div>
          </div>

          <div className="flex flex-col justify-center max-w-250 gap-4">
           <h2 className="text-white text-2xl font-medium">High on Metacritic</h2>
           <div ><HighOnMetacritic games={games.highMetacritic?.results}/></div>
         </div>

          <div className="flex flex-col justify-center max-w-250 gap-4">
             <h2 className="text-white text-2xl font-medium">Most Time Played</h2>
             <div> <MostTimePlayed games={games.mostPlayed?.results}/></div>
          </div>

         </div>

    </div>
  )
}