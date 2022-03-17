import { useState } from "react";
import { Button } from ".";
import { fireEvent, render, screen } from "../../utils/test";

const SimulateClick = () => {
  const [text, setText] = useState("Click me!");

  const onClick = () => {
    setText("Clicked");
  };

  return <Button onClick={onClick}>{text}</Button>;
};

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

  test("click on Button", () => {
    render(<SimulateClick />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveTextContent("Clicked");
  });

  it("deveria falhar", () => {
    render(<SimulateClick />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).not.toHaveTextContent("Click me!");
  });
});
