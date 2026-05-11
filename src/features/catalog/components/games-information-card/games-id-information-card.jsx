import { DisplayMetacriticOpinionId } from "../../utils/display-metacritic-opinion"
import { RequirementsRecommended } from "./for-requirements/recommended-requirements"
import { MinimumRequirements } from "./for-requirements/minimum-requirements"
import { DisplayStarsReview } from "../../utils/display-review-stars"
import { useWishlistStore } from "../../../wishlist/store/wishlist-store"
import { PricesMetacritic } from "../../utils/display-prices"
import { Heart, UserCheck } from "lucide-react"
import { generatePrices } from "../../utils/render-prices-cart"
import { useCartStore } from "../../../cart/store/cart-store"
import { useState } from "react"
import styles from "./id-games.module.css"

export const GamesIdInformationCard = ({games, screenshots}) => {
  const platformPc = games.platforms?.find(pc => pc.platform.name === "PC")
  const requirements = platformPc?.requirements

  const { addToCart } = useCartStore()
  const { addToWishlist, deleteFromWishlist, inWishlist } = useWishlistStore()
  const [ modalImage, setModalImage] = useState(null)

  return (
    <div className="flex flex-col overflow-x-hidden mb-5 gap-8">
    
    {/* INICIO DE LA IMAGEN, BOTON DE COMPRA Y REQUERIMIENTOS*/}
    <div>

      <div className="relative w-full">
       <img className="w-full h-135 object-fit" src={games.background_image}/>
        
        {/*INICIO DEL BOTON DE COMPRA */}
       <div className={styles.purchaseinformation}>

         <div className="flex gap-5 items-center justify-between">
           <div className="text-3xl">
             {games.name}
           </div>

           <div>
             <DisplayMetacriticOpinionId metacritic={games.metacritic} />
           </div>
         </div>
         
         <div className="flex flex-col gap-2">
          <p className="font-semibold">{games.developers?.map(developer => developer.name).join(", ")}</p>
          <p> {games.genres?.map(genre => genre.name).join(", ")}</p>
         </div> 

          <div className="flex justify-between">

           <span><DisplayStarsReview ratings={games.rating}/></span>
           <span className="flex gap-2">Rated by: {games.ratings_count} <UserCheck /></span>

          </div>

          <div className="text-2xl flex">
            US$ <PricesMetacritic metacritic={games.metacritic}/>
          </div>

          <div className="flex justify-center items-center gap-2">
            <button className=" bg-orange-500 cursor-pointer w-full p-1 text-xl rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" onClick={() =>  addToCart({...games, price: generatePrices(games.metacritic)})}>
              ADD TO THE CART
            </button>

            <button className=" border bg-transparent border-gray-700 p-1 rounded-lg text-xl h-9 cursor-pointer flex justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" onClick={() => inWishlist(games.id) ? deleteFromWishlist(games.id) : addToWishlist(games)}>
             <Heart className={`w-8 ${inWishlist(games.id) ? "fill-red-500 text-red-500" : "text-white" }`}/>
            </button>
            
          </div>

       </div>
       {/*FINAL DEL BOTON DE COMPRA */}

      </div>
     
     <div className={styles.detailsfromthegame}>

       <div className="max-w-120">
         <div className="flex flex-col">

           <div>
             Date of release: {games.released}
           </div>

           <div>
             Available on: {games.platforms?.map(platforms => platforms.platform.name).join(", ")}
           </div>

           <div className="w-100">
             Owned by: {games.added_by_status?.owned} Users <br/>
             Average time played: {games.playtime}h <br/>
             {games.added_by_status?.beaten} Users had got all the achievements! :D
           </div>

         </div>
       </div>

     </div>

   </div>
    {/* FINAL DE LA IMAGEN, BOTON DE COMPRA Y REQUERIMIENTOS*/}

    {/* INICIO DE LAS SCREENSHOTS*/}
    <div className="flex justify-center mt-5 max-w-screen">

     <div className="flex flex-wrap justify-center gap-2">

      {screenshots?.map(screenshot => (
        <img className="w-90 rounded-lg cursor-pointer" src={screenshot.image} alt="screenshot" key={screenshot.id}  onClick={() => setModalImage(screenshot.image)}/>
      ))}
        {modalImage && ( 
          <div className="fixed inset-0 flex items-center justify-center z-50 cursor-pointer bg-black/85" onClick={() => setModalImage(null)}>
               <img src={modalImage} className="max-w-[90%] max-h-[90%] "/>
          </div>
         )}
      </div>

    </div>
    {/* FINAL DE LAS SCREENSHOTS*/}

    {/* INICIO DE LOS REQUERIMIENTOS*/}
     <div className="flex flex-col gap-3 w-190 self-center mt-3 rounded-lg border border-gray-400 py-2">
        <div className="flex justify-center">
          <h2 className={`${styles.requirements} text-2xl font-medium`}>Información sobre el juego</h2>
        </div>

        <div className="flex flex-col p-2">
      <div className={`${styles.requirements} flex flex-col justify-center gap-1 p-2`}>
       <h2>REQUIREMENTS RECOMMENDED:</h2>
       {requirements?.recommended ? requirements.recommended : <RequirementsRecommended /> }
      </div>

      <div className={`${styles.requirements} flex flex-col gap-1 justify-center p-2`}>
        <h2>REQUIREMENTS MINIMUM:</h2>
        {requirements?.minimum ? requirements.minimum : <MinimumRequirements/>}  
      </div>
        </div>
     </div>
    {/* FINAL DE LAS SCREENSHOTS*/}

    </div>
  )
}