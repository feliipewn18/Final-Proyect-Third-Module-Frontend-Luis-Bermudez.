import { useWishlistStore } from "../../store/wishlist-store"
import { WishlistGame } from "../wishlist-game/wishlist-game"

export const WishListContainer = () => {
    const { wishlist } = useWishlistStore()
  return (
    <div className="flex flex-wrap max-w-200 gap-2 border border-gray-600 xl:max-w-300 lg:max-w-300 bg-black/90 shadow-gray-500 shadow-sm rounded-lg p-3 overflow-y-auto">
      <div className="flex justify-center">
          {wishlist.length === 0 && <p className="text-white text-xl font-medium flex items-center">Your wishlist is empty...</p>}
      </div>

          {wishlist.map(game => ( 
            <WishlistGame games={game} key={game.id}/>
          ))}
    </div>
  )
}
