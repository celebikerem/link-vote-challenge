import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {};

const setup = (props = defaultProps, state = null) => {
  return shallow(<Header {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const linkItemComponent = findByTestAttr(wrapper, "component-header");
  expect(linkItemComponent.length).toBe(1);
});
