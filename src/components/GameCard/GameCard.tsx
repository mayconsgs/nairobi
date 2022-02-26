import { GameCardProps } from "./GameCard.types";
import styles from "./GameCard.module.scss";

const GameCard = ({ date, ...props }: GameCardProps) => {
  return (
    <article className={styles.gameCard}>
      <img src={props.imageUrl} alt={props.gameName} />

      <p>
        <span>{date.toDateString()}</span> starting at {date.getHours()}:
        {date.getMinutes()}
      </p>

      <h3>{props.gameName}</h3>

      <div>
        <div>
          <h6>Prize</h6>
          <p>
            <img src="/assets/trofeu.svg" alt="" />
            <span>{props.prize}</span>
          </p>
        </div>
        <div>
          <h6>Team Size</h6>
          <p>
            <img src="/assets/x.svg" alt="" />
            <span>
              {props.teamSize} vs {props.teamSize}
            </span>
          </p>
        </div>
        <div>
          <h6>Sponsor</h6>
          <p>
            <img src="/assets/steam.svg" alt="" />
            <span>{props.sponsor}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default GameCard;
