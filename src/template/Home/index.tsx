import GameCard from "../../components/GameCard/GameCard";
import { Sponsor } from "../../components/GameCard/GameCard.types";

const Home = () => {
  return (
    <main>
      <h2>Good Evening John..!</h2>

      <section>
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
      </section>
    </main>
  );
};

export default Home;
