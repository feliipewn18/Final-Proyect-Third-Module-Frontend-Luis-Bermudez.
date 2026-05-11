import { useCartStore } from "../../store/cart-store"
import emailjs from "@emailjs/browser"

export const PurchaseContainer = ({email}) => {

    const { cart, getTotalAmount } = useCartStore()
    const total = getTotalAmount()

    const handleOrder = async () => {
      await emailjs.send(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
         {  email_usuario: email,
           allProducts: cart.map(game => `${game.name} x${game.quantity} | $${(game.price * game.quantity).toFixed(2)}`
           ).join('\n'),
           subtotal: total.toFixed(2),
           total:total.toFixed(2),
           order_id: Date.now()
         },
         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      alert("Thanks for your purchase! We'll be back in a minute")
    }

  return (
    <div className="bg-black border border-white rounded-lg shadow-gray-500 shadow-sm p-4 flex flex-col gap-5">

        <div className=" p-3 gap-2 flex flex-col rounded-t-lg border border-white text-white/75">
         <h2 className="text-3xl text-white/60 font-medium">Summary</h2>
         <button onClick={handleOrder} className="bg-white/90 rounded-lg px-3 py-1 w-full cursor-pointer text-black font-medium hover:border hover:border-white hover:bg-black/90 hover:text-white/90">Continue with the order</button>
         <div className="flex justify-between">
            <div>
           Products:
            </div>
            <div>
            {cart.length}
            </div>
         </div>

         <div className="flex justify-between">
            <span>
             Subtotal:
            </span>
            <span className="text-xl">
             ${total.toFixed(2)}
            </span>
         </div>

        </div>

        <div className="bg-black text-white/75 border rounded-b-lg shadow-sm p-3">
         <div className="flex justify-between">
            <h2>Total:</h2>
            <span className="text-3xl">${total.toFixed(2)}</span>
         </div>
         <div>
            <div className="flex gap-1">
            <input type="checkbox"/>
             <p className="text-sm">Acepto las politicas de privacidad de Fuego Gaming</p>
            </div>
            <div className="flex gap-1">
                <input type="checkbox"/>
              <p className="text-sm">Quiero recibir ofertas personalizadas de los mejores precios de los juegos por parte de Fuego Gaming :D </p>
            </div>
         </div>
        </div>

    </div>
  )
}
