import { Search } from "lucide-react"
import styles from "./search.module.css"

export const Research = ({search, setSearch}) => {
  return (
    <div className={`${styles.search} md:max-w-135 lg:w-200 sm:max-w-125 rounded-lg px-6 py-2 flex gap-3 mt-1`}>
       <Search className="md:w-15 sm:w-15" />
       <input  value={search} onChange={(e) => {setSearch(e.target.value);}} className=" lg:w-250 sm:w-full text-white " type="text" placeholder="Search for a game..." />
    </div>
  )
}