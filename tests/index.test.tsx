import { render } from "@testing-library/react";

import Home from "../pages";
import { MenuFixture } from "./fixture";

const props = {
  menuData: MenuFixture,
};

describe("Home page", () => {
  it("should render", () => {
    const { container } = render(<Home {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
