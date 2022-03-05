import { Button } from ".";
import { render } from "../../utils/test";

describe("<Button />", () => {
  it("render Button", () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("render Raised Button", () => {
    const { container } = render(<Button variant="raised">Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("render Outline Button", () => {
    const { container } = render(<Button variant="outline">Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
