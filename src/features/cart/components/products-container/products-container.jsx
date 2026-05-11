import { useCartStore } from "../../store/cart-store.js"
import { GameProducts } from "../game-products/game-product.jsx"
import styles from "./products-container-scroll.module.css"

export const ProductsContainer = () => {
  const { cart } = useCartStore()

  return (
    <div className={`${styles.scroll} flex gap-2 bg-black border border-gray-600 shadow-sm mb-5 shadow-white flex-col w-155 max-h-200 overflow-y-auto p-3 rounded-lg`} >
      <h2 className="text-2xl text-white font-medium">My cart</h2>

    {cart.length === 0 && <p>Your cart is empty!</p>}
     
     {cart.map(game =>
     (
     <GameProducts game={game} key={game.id}/>
     ) )}
    </div>)
}