import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  linkItems: [],
  updateVote: jest.fn(),
  sortLink: jest.fn(),
  deleteLink: jest.fn(),
  defaultSorting: "0",
};

const setup = (props = defaultProps, state = null) => {
  return shallow(<Home {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const homeComponent = findByTestAttr(wrapper, "component-home");
  expect(homeComponent.length).toBe(1);
});
