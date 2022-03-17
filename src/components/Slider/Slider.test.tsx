import { Slider } from ".";
import { render } from "../../utils/test";
import { Sponsor } from "../GameCard";
import GameCard from "../GameCard/GameCard";

const list: number[] = [];

for (let i = 0; i < 10; i++) list.push(i);

const Basic = () => {
  return (
    <Slider>
      {list.map((e) => {
        return (
          <GameCard
            key={e}
            imageUrl="/img/game-image.png"
            date={new Date()}
            gameName="COD Warzone Tournament"
            prize={2500}
            teamSize={4}
            sponsor={Sponsor.steam}
          />
        );
      })}
    </Slider>
  );
};

describe("<Slider />", () => {
  test("shold be render Slider", () => {
    const { container } = render(<Basic />);

    expect(container).toMatchSnapshot();
  });
});
