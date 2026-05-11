import { Star, StarOff } from "lucide-react"

export const DisplayStarsReview =  ( {ratings} ) => {
    
    if(ratings < 0.49) return <div className="flex gap-1.5"> <Star/> <Star/> <Star/> <Star/><Star/> {ratings}</div>
    if(ratings <= 1.49) return <div className="flex gap-1.5"> <Star className="fill-white"/> <Star/> <Star/> <Star/><Star/> {ratings}</div>
    if(ratings <= 2.49) return <div className="flex gap-1.5"> <Star className="fill-white"/> <Star className="fill-white"/> <Star/> <Star/> <Star/> {ratings}</div>
    if(ratings <= 3.49) return <div className="flex gap-1.5"> <Star className="fill-white"/> <Star className="fill-white"/><Star className="fill-white"/> <Star/><Star/>{ratings}</div>
    if(ratings <= 4.49) return <div className="flex gap-1.5"> <Star className="fill-white"/> <Star className="fill-white"/><Star  className="fill-white" /> <Star  className="fill-white"/> <Star/>{ratings} </div>
    if(ratings <= 5) return <div className="flex gap-1.5"> <Star className="fill-white"/> <Star className="fill-white"/> <Star className="fill-white"/> <Star className="fill-white"/><Star className="fill-white"/> {ratings} </div>

    return <div className="flex"> <StarOff/></div>

}