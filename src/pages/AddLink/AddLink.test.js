import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddLink from "./AddLink";
import { MemoryRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  linkItems: [],
  addLink: jest.fn(),
};

const setup = (props = defaultProps, state = null) => {
  return mount(
    <MemoryRouter>
      <AddLink {...props} />
    </MemoryRouter>
  );
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const AddLinkComponent = findByTestAttr(wrapper, "component-add-link");
  expect(AddLinkComponent.length).toBe(1);
});

test("successful added 1 link", () => {
  const wrapper = setup();
  let button = findByTestAttr(wrapper, "add-link-button");
  button.simulate("click");
  const added = findByTestAttr(wrapper, "link-added-empty-input");
  expect(added.props().value).toBe("");
});
