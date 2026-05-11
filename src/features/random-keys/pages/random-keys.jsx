import { SkeletonRandomKeysPage } from "../components/skeleton-random-keys/skeleton-page-random-keys"
import { FetchErrorRandomKeys } from "../components/skeleton-random-keys/fetch-error"
import { FilterRandomKeys } from "../components/filter-random-keys/filter-random-keys"
import { UseGetRandomKeys } from "../hooks/use-get-random-keys"
import { KeyCartItem } from "../components/key-card/key-card"
import { useState } from "react"

export function RandomKeysPage() {
   const {keys, loading, error} = UseGetRandomKeys()
   const [filter, setFilter] = useState({
    platforms: [],
    status: [],
    rarities: [],
   })

   const filteredKeys = keys.filter(key => {
    if(filter.platforms.length > 0 && !filter.platforms.includes(key.platform)) return false
    if(filter.status.length > 0 && !filter.status.includes(key.status)) return false
    if(filter.rarities.length > 0 && !filter.rarities.includes(key.rarity)) return false

    return true
   })

   if(loading) return (<SkeletonRandomKeysPage/>)
   if(error) return (<FetchErrorRandomKeys/>)
  
  return (
    <div className="flex max-h-screen p-3">

      <div className="flex justify-center">
        <FilterRandomKeys  filter={filter} onChangeFilter={setFilter}/>
      </div>

      <div className="flex flex-wrap gap-3 justify-center w-260 overflow-y-scroll [scrollbar-width:none]">
        {filteredKeys.map((keys) => (
          <KeyCartItem  keys={keys} key={keys.id}/>
        )
        )}
      </div>

    </div>
  )
}