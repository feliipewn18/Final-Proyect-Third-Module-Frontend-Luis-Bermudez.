import { createBrowserRouter } from "react-router";
import { PrincipalLayout } from "../common/layouts/principal-layout";
import { RandomKeys } from "../app/random-keys/random-keys";
import { WishList } from "../app/wishlist/wishlist";
import { Catalog } from "../app/catalog/catalog";
import { Home } from "../app/home/home";
import { Cart } from "../app/cart/cart";
import { GamesIdInformation } from "../features/catalog/pages/game-id-information";
import { Login } from "../core/components/login-form";
import { ProtectedRoute } from "../core/components/protectedroute";

export const Router = createBrowserRouter([
    {
        path: "/login",
        Component: Login,
    },

{
    element: <ProtectedRoute/>,
    children: [
     {
        path: "/",
        Component: PrincipalLayout,
        children: [
            {
            index: true, 
            Component: Home
        },
                {
            path: "catalog", 
            Component: Catalog
        },
                {
            path: "random-keys", 
            Component: RandomKeys
        },
                {
            path: "wish-list", 
            Component: WishList
        },
        {
            path: "cart", 
            Component: Cart
        },
        {
            path: "catalog/games/:gameId", 
            Component: GamesIdInformation
        }
        ]
     }
    ]
},
])
