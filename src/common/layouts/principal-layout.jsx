import { LogOut, ShoppingCart } from "lucide-react";
import { Link, Outlet } from "react-router";
import { useDebounce } from "use-debounce";
import { Research } from "../components/search/search";
import { supabase } from "../../core/supabase-client";
import { useState } from "react";
import { SideBar } from "../components/sidebar/sidebar";
import styles from "./principal.module.css"
import { useCartStore } from "../../features/cart/store/cart-store.js";

export function PrincipalLayout() {

    const { cart } = useCartStore()

    const [ search, setSearch ] = useState("")
    const [ debouncedSearch ] = useDebounce(search, 1000)


  return (
    <div>

    <div className={`${styles.container} flex h-screen flex-col lg:flex-row`}>

        <SideBar className=" top-0 h-screen overflow-y-auto" />


        <main className={`${styles.main} flex flex-col flex-1 gap-4 w-full overflow-x-hidden`}>

            <div className="flex w-full justify-between items-center px-6 py-2 mt-2">

                <div className=" items-center">
                <Research search={search} setSearch={setSearch}/>
                </div>

                <div className="flex gap-4 items-center">
 
                 <div className="flex items-center relative">
                    <Link to="cart">
                    <ShoppingCart className="w-10 lg:w-15 lg:h-8.5 text-white" />
                    </Link>

                    {cart.length > 0 && ( 
                        <span className="absolute bottom-4.5 right-1 text-white font-medium bg-red-600 rounded-full w-5 text-sm flex justify-center">
                            {cart.length}
                        </span>
                    )}
                    
                 </div>


                 <div  className="cursor-pointer flex items-center gap-1 " onClick={() => supabase.auth.signOut()}>
                    <LogOut className="lg:w-10 text-red-700 lg:h-8.5 " /> <p className="text-red-500 text-normal lg:text-xl sm:text-lg">Log out</p>
                 </div>

                </div>

            </div>

            <div className="flex min-h-screen w-full flex-col sm:mx-auto">

                <section >

                    <Outlet context={{search: debouncedSearch}}/>

                </section>

            </div>

        </main>

    </div>

    </div>
  )
}
