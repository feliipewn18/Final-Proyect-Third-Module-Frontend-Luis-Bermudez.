import { Earth, Heart } from "lucide-react"

export const DisplayStatus = ({status}) => {
    if(status === "GLOBAL") return <div className="text-green-500 font-medium flex gap-2"> <Earth className="w-5" />{status}</div>
    if(status === "EUROPE") return <div className="text-yellow-500 font-medium">{status}</div>
    if(status === "LATINOAMERICAN") return <div className="text-red-500 font-medium">{status}</div>
    
    return <Heart/>
}