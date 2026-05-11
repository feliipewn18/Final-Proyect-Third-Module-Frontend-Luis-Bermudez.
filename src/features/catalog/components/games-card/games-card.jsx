import { useNavigate } from "react-router";
import { DisplayMetacriticOpinion } from "../../utils/display-metacritic-opinion";
import styles from "./games-card.module.css"
import { PricesMetacritic } from "../../utils/display-prices";

export const GamesCardItem = ({games}) => {
 const {id, metacritic, name, background_image} = games;

 const navigate = useNavigate()

 const handleNavigate = () => {
    navigate(`/catalog/games/${id}`)
 }
 return (
    <div className={`${styles.card} shrink-0 p-2 rounded-lg w-40 flex flex-col gap-1 transition-transform duration-300 hover:-translate-y-2 cursor-pointer`} onClick={handleNavigate}>

        <img className="h-46 object-cover rounded-lg" src={background_image} alt={name} loading="lazy"/>

        <h2 className="truncate text-white">{name}</h2>

        <div className="flex justify-between">

            <div>
             <DisplayMetacriticOpinion metacritic={metacritic} />
            </div>

            <div className="text-white flex">
             $<PricesMetacritic metacritic={metacritic}/>
            </div>

        </div>
    </div>
 )
}