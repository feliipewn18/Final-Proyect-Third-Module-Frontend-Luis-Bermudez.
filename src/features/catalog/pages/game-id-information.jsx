import { useParams } from "react-router";
import { useGetGamesById } from "../hooks/use-get-games-by-id"
import { SkeletonGamesIdPage } from "../components/games-information-card/skeleton-games-id-information";
import { FetchErrorGamesById } from "../components/games-information-card/fetch-error";
import { GamesIdInformationCard } from "../components/games-information-card/games-id-information-card";

export function GamesIdInformation() {
    
   const { gameId } = useParams();
    
   const { games, screenshots, loading, error } = useGetGamesById(gameId);

   if(loading) return ( <SkeletonGamesIdPage /> )
   if(error) return ( <FetchErrorGamesById />)

  return (
    <div>
        <GamesIdInformationCard games={games} screenshots={screenshots} />
    </div>
  )
}