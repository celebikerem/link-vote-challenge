import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pagination from "./Pagination";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  postsPerPage: 1,
  totalPosts: 1,
  paginate: 1,
};

const setup = (props = defaultProps, state = null) => {
  return shallow(<Pagination {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const linkItemComponent = findByTestAttr(wrapper, "component-pagination");
  expect(linkItemComponent.length).toBe(1);
});
