import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LinkItem from "./LinkItem";

Enzyme.configure({ adapter: new Adapter() });


const defaultProps = {
  linkItems: {
    linkName: "test name",
    linkUrl: "test url",
    linkVote: "0",
    linkId: "0",
  },
  updateVote: jest.fn(),
  deleteLink: jest.fn(),
};

const setup = (props = defaultProps, state = null) => {
  return shallow(<LinkItem {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const linkItemComponent = findByTestAttr(wrapper, "component-link-item");
  expect(linkItemComponent.length).toBe(1);
});

