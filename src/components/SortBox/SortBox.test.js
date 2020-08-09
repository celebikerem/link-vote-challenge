import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortBox from "./SortBox";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  sortLink: "",
};

const setup = (props = defaultProps, state = null) => {
  return shallow(<SortBox {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const SortBoxComponent = findByTestAttr(wrapper, "component-sort-box");
  expect(SortBoxComponent.length).toBe(1);
});
