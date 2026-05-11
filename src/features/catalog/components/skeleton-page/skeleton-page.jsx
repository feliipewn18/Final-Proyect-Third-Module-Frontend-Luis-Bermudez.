import { SkeletonGamesCard } from "./skeleton-games-card"

export const CatalogSkeletonPage = () => {
  return (
    <div className="flex justify-center flex-wrap gap-2">
  {Array.from({length: 20}).map((_, key) => (
    <SkeletonGamesCard key={key}/>
  ))}
    </div>
  )
}