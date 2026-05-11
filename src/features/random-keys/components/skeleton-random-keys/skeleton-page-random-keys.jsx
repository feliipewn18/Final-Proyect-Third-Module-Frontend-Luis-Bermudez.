import { SkeletonFilterRandomKeys } from "./skeleton-filter-random-keys"
import { SkeletonItemsRandomKeys } from "./skeleton-item-random-keys"

export const SkeletonRandomKeysPage = () => {
  return (
    <div className="flex max-h-screen justify-between">

      <div>
       <SkeletonFilterRandomKeys/>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center w-260 overflow-y-scroll [scrollbar-width:none]">
        {Array.from({length:20}).map((_, key) => (
            <SkeletonItemsRandomKeys key={key}/>
        ))}
      </div>

    </div>
  )
}