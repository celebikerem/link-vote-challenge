import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  return mount(
      <App {...props} />
  );
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const AppComponent = findByTestAttr(wrapper, "component-app");
  expect(AppComponent.length).toBe(1);
});

describe("update vote", () => {
  describe("by upvote", () => {
    it("successful vote up by 1 on upvote button click", () => {
      const wrapper = setup();
      wrapper.setState({
        linkItems: [{ linkName: "", linkUrl: "", linkVote: 0, linkId: 0 }],
        defaultSorting: "",
      });
      wrapper.update();
      const button = findByTestAttr(wrapper, "up-vote-0");
      button.simulate("click");
      const voteWrapper = findByTestAttr(wrapper, "vote-wrapper-0");
      expect(voteWrapper.text()).toContain("1");
    });
  });
  describe("by downvote", () => {
    it("successful vote down by 1 on downvote button click", () => {
      const wrapper = setup();
      const button = findByTestAttr(wrapper, "down-vote-0");
      button.simulate("click");
      const voteWrapper = findByTestAttr(wrapper, "vote-wrapper-0");
      expect(voteWrapper.text()).toContain("0");
    });
  });
});
