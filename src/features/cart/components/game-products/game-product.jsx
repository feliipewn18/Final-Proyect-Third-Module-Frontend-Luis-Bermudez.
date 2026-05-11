import { CircleQuestionMark, Flame, Trash } from "lucide-react"
import { useCartStore } from "../../store/cart-store"

import styles from "./game-products.module.css"

export const GameProducts = ({game}) => {
      const { deleteFromCart, increaseProduct, decreaseProduct } = useCartStore()
  return (
       <div key={game.id} className={`${styles.card} flex border p-3 gap-4 rounded-lg  transition-transform duration-200 hover:-translate-y-1`}>


          <img className="w-40 h-25 object-cover flex shrink-0 rounded-lg" src={game.background_image || game.img} alt={game.name}/>

          <div className="flex flex-col flex-1 min-w-0">

            <div className="flex items-center">
               <Flame className="text-red-500 fill-yellow-400"/>
            <p className="text-sm"> | Fuego Gaming</p>
            </div>
            <div className="text-xl hover:text-yellow-400 truncate font-medium"> 
              {game.name}
            </div>
             
             <div className="flex justify-between items-center"> 

            <div className="flex justify-between w-full items-center">

              <div className="opacity-50 flex gap-1 items-center">Digital Product <CircleQuestionMark className="w-4"/> </div>

              <div className="flex gap-4 items-center">
              <button onClick={() => decreaseProduct(game.id)} className="cursor-pointer text-xl text-white">
                  -
                </button>
                <p>
                 {game.quantity}
                </p>
                <button onClick={() => increaseProduct(game.id)} className="cursor-pointer text-lg text-white">
                  +
                </button> 

                
              </div>

              <div>${(game.price * game.quantity).toFixed(2)}</div>
              <button onClick={() => deleteFromCart(game.id)} className="cursor-pointer"> <Trash className="text-red-800  transition-transform duration-200 hover:-translate-y-1"/> </button>
            </div>


             </div>

            <div>
              Enjoy your product! :D
            </div>

          </div>

       </div>
  )
}
