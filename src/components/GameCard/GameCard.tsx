import * as S from ".";
import { GameCardProps } from ".";

const GameCard = ({ date, ...props }: GameCardProps) => {
  return (
    <S.Container>
      <S.Image src={props.imageUrl} alt={props.gameName} />

      <S.DateText>
        <S.DateRed>{date.toDateString()}</S.DateRed> starting at{" "}
        {date.getHours()}:{date.getMinutes()}
      </S.DateText>

      <S.h3>{props.gameName}</S.h3>

      <S.PropsContainer>
        <S.Props>
          <S.PropsTitle>Prize</S.PropsTitle>
          <S.PropsText>
            <S.PropsIcon src="/assets/trofeu.svg" alt="" />
            {props.prize}
          </S.PropsText>
        </S.Props>
        <S.Props>
          <S.PropsTitle>Team Size</S.PropsTitle>
          <S.PropsText>
            <S.PropsIcon src="/assets/x.svg" alt="" />
            {props.teamSize} vs {props.teamSize}
          </S.PropsText>
        </S.Props>
        <S.Props>
          <S.PropsTitle>Sponsor</S.PropsTitle>
          <S.PropsText>
            <S.PropsIcon src="/assets/steam.svg" alt="" />
            {props.sponsor}
          </S.PropsText>
        </S.Props>
      </S.PropsContainer>
    </S.Container>
  );
};

export default GameCard;
