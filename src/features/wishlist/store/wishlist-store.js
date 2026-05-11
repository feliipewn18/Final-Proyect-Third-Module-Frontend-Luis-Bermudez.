import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create(persist(
    (set, get) => ({
        wishlist:[],

      addToWishlist: (game) => {
        const gameExists = get().wishlist.find(games => games.id === game.id)
        if(!gameExists) {
            set(gamestate => ({wishlist: [...gamestate.wishlist, game]}))
        }
      },

      deleteFromWishlist: (id) => {
        set(gamestate => ({wishlist: gamestate.wishlist.filter(game => game.id !== id)}))
      },

      inWishlist: (id) => {
        return get().wishlist.some(game => game.id == id)
      }
    }),

     {name: "wishlist-store"}
))