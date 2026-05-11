import { CatalogSkeletonPage } from "../components/skeleton-page/skeleton-page"
import { PaginationCatalog } from "../components/pagination-catalog/pagination-catalog"
import { GamesCardItem } from "../components/games-card/games-card"
import { FetchError } from "../components/skeleton-page/fetch-error"
import { useOutletContext } from "react-router"
import { useGetGames } from "../hooks/use-get-games"

export function CatalogPage() {
    const { search } = useOutletContext()
    const { games, loading, error, page, setPage, next, prev} = useGetGames(search)

    if (error) return (<FetchError message={error}/>)
    if (loading) return (<CatalogSkeletonPage/>)

  return (
    <div className="flex flex-col mb-5">

        <div className="flex flex-wrap gap-2 mx-auto justify-center lg:max-w-300 md:max-w-200 md:mx-auto ">
            {games.map((games) =>
            ( <GamesCardItem games={games} key={games.id}/>)
            )}

        </div>

        <div className="mt-7">

            <PaginationCatalog page={page} setPage={setPage} next={next} prev={prev}/>
        </div>

    </div>   
  )
}