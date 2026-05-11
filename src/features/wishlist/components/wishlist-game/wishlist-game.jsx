import { useNavigate } from "react-router"
import { DisplayMetacriticOpinion } from "../../../catalog/utils/display-metacritic-opinion"
import { PricesMetacritic } from "../../../catalog/utils/display-prices"
import styles from "./wl-game.module.css"
import { Heart } from "lucide-react"
import { useWishlistStore } from "../../store/wishlist-store"

export const WishlistGame = ({games}) => {
     const {id, metacritic, name, background_image} = games;
     const navigate = useNavigate()
       const { addToWishlist, deleteFromWishlist, inWishlist } = useWishlistStore()

    const handleNavigate = () => {
    navigate(`../catalog/games/${id}`)
 }
  return (
        <div className={`${styles.card} p-2 rounded-lg w-40 flex flex-col gap-1 h-64 transition-transform duration-300 hover:-translate-y-2 cursor-pointer `} onClick={handleNavigate}>
    
            <img className="h-46 object-cover rounded-lg" src={background_image} alt={name} loading="lazy"/>
    
            <h2 className="truncate text-white">{name}</h2>
    
            <div className="flex justify-between items-center">
    
                <div>
                 <DisplayMetacriticOpinion metacritic={metacritic} />
                </div>

                <div>
              <button className=" border bg-transparent border-gray-700 p-1 rounded-lg text-xl h-9 cursor-pointer flex justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" onClick={() => inWishlist(games.id) ? deleteFromWishlist(games.id) : addToWishlist(games)}>
             <Heart className={`${inWishlist(games.id) ? "fill-red-500 text-red-500" : "text-white" }`}/>
            </button>
            
                </div>
    
                <div className="text-white flex">
                 $<PricesMetacritic metacritic={metacritic}/>
                </div>
    
            </div>
        </div>
  )
}
