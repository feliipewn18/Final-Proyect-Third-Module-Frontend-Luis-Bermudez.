import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(persist (
    (set, get) => ({
        cart:[],
        
        addToCart: (games) => {
            const productExists = get().cart.find(game => game.id === games.id)
            if (productExists) {
                set(cartstate => ({
                    cart: cartstate.cart.map(game => game.id === games.id ? {...game, quantity: game.quantity + 1} : game)
                }))
            } else {
                set(cartstate => ({cart: [...cartstate.cart, { ...games, quantity: 1}]}))
            }
        },

        deleteFromCart: (id) => {
            set(cartstate => ({ cart: cartstate.cart.filter(game => game.id !== id)}))
        },

        increaseProduct: (id) => {
            set(cartstate => ({
                cart: cartstate.cart.map( game => game.id === id ? {...game, quantity: game.quantity + 1} : game)
            }))
        },
        decreaseProduct: (id) => {
            set(cartstate => ({
                cart: cartstate.cart.map(game =>
                    game.id === id && game.quantity > 1 ? {...game, quantity: game.quantity -1 } : game
                )
            }))
        },
         getTotalAmount:() => {
            return get().cart.reduce((total, game) => total + (game.price * game.quantity), 0)
         }
    }),
    { name: `cart-store`}
))