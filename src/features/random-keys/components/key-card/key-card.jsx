import { useCartStore } from "../../../cart/store/cart-store";
import { DisplayIconKeys } from "../../utils/display-icon-keys";
import { DisplayStatus } from "../../utils/display-status";
import styles from "./key-card.module.css"

export const KeyCartItem = ({keys}) => {

  
  const { platform, name, status, img, price} = keys;
  const { addToCart } = useCartStore()
  
  
  return (
    <div className={`${styles.card} px-4 py-2 border w-60 max-h-115 rounded-lg flex flex-col`}>

        <img className="w-55 rounded-t-lg h-70" src={img} alt={name} />

        <div className="flex flex-col gap-2">

          <div className="flex justify-center text-white rounded-b-lg">
           <DisplayIconKeys platform={platform}/>
          </div>

          <div>
            <h2 className="text-sm truncate text-white">
             {name}
            </h2>

            <div>
             <DisplayStatus status={status}/>
            </div>

            <p className="opacity-50">
             From
            </p>

            <span className="text-xl font-medium text-white ">
             $ {price}
            </span>


          </div>
            <button className="bg-amber-500 w-full rounded-lg font-medium cursor-pointer transition-transform duration-200 hover:-translate-y-1" onClick={() => addToCart({...keys, price})}>
              ADD TO CART
            </button>
        </div>

    </div>
  )
}
