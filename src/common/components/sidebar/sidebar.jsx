import { BookA, House, KeyRound, ListChecks, ShoppingCart } from "lucide-react"
import { Link } from "react-router"
import styles from "./sidebar.module.css"
import { useCartStore } from "../../../features/cart/store/cart-store"


export const SideBar = () => {
   const { cart } = useCartStore()
    return (

 <aside className={`${styles.container} lg:min-h-screen sticky self-start lg:w-55 p-3 flex flex-col lg: flow-row`}>
    <div className="flex h-full flex-col">

        <div className="mb-8 text-white text-2xl font-medium flex justify-center border-b border-white py-3">
            <h1> FIRE GAMING</h1>
        </div>


        <div className="flex flex-col">
          <nav className="flex flex-row gap-6 sm:flex-row sm:justify-center lg:flex-col xl:flex-col">
  
          <Link className="flex gap-2 items-center text-white hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200 hover:translate-x-1" to="/" >
           <House /> Home
          </Link>

          <Link className="flex gap-2 items-center text-white hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200 hover:translate-x-1" to="catalog">
           <BookA /> Catalog
          </Link>

          <Link className="flex gap-2 items-center text-white hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200 hover:translate-x-1" to="random-keys">
           <KeyRound /> Random keys
          </Link>

          <Link className="flex gap-2 items-center text-white hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200 hover:translate-x-1" to="wish-list">
           <ListChecks /> Wishlist
          </Link>

          <Link className="flex gap-2 items-center text-white hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200 hover:translate-x-1 relative" to="cart">
           <ShoppingCart /> Cart
              {cart.length > 0 && ( 
                 <span className="absolute left-6 bottom-4.5 py-0.5 text-white font-medium bg-red-600 rounded-full w-5 text-xs flex justify-center">
                {cart.length}
                  </span>
               )}
          </Link>

          </nav>

       </div>

    </div>
 </aside>

    )
}