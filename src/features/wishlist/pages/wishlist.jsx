import { WishListContainer } from "../components/wishlist-container/wishlist-container";

export function WishListPage() {
  return (
    <div className="flex flex-col p-2 items-center gap-4">
      <h2 className="text-3xl text-white flex">My Wishlist</h2>
      <WishListContainer/>
    </div>
  )
}