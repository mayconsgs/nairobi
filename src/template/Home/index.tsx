import GameCard from "../../components/GameCard/GameCard";
import { Sponsor } from "../../components/GameCard/GameCard.types";
import { Slider } from "../../components/Slider";

const count = 10;

const list: number[] = [];

for (let i = 0; i < count; i++) {
  list.push(i);
}

const Home = () => {
  return (
    <main>
      <h2>Good Evening John..!</h2>

      <Slider>
        <GameCard
          imageUrl="/img/game-image.png"
          date={new Date()}
          gameName="COD Warzone Tournament"
          prize={2500}
          teamSize={4}
          sponsor={Sponsor.steam}
        />
        <GameCard
          imageUrl="/img/game-image.png"
          date={new Date()}
          gameName="COD Warzone Tournament"
          prize={2500}
          teamSize={4}
          sponsor={Sponsor.steam}
        />
        <GameCard
          imageUrl="/img/game-image.png"
          date={new Date()}
          gameName="COD Warzone Tournament"
          prize={2500}
          teamSize={4}
          sponsor={Sponsor.steam}
        />
        <GameCard
          imageUrl="/img/game-image.png"
          date={new Date()}
          gameName="COD Warzone Tournament"
          prize={2500}
          teamSize={4}
          sponsor={Sponsor.steam}
        />
      </Slider>
    </main>
  );
};

export default Home;
