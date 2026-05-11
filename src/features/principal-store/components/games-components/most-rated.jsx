import { GamesCardItem } from "../../../catalog/components/games-card/games-card"
import styles from "./home.module.css"

export const MostRated = ({games}) => {
  return (
    <div className={`${styles.scroll} flex gap-2 overflow-x-auto`}>
        {games?.map(game => (
         <GamesCardItem games={game} key={game.id}/>
        ))}
    </div>
  )
}
