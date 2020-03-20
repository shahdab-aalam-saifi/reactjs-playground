import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import HackerNews from "..";
import chai from "chai";
import { mount, shallow, render } from "enzyme";
import { DEFAULT_QUERY } from "../../../constants";

describe("HackerNews", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HackerNews />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<HackerNews />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("has correct default values before render", () => {
    const shallowComponent = shallow(<HackerNews />, {
      disableLifecycleMethods: true
    }).instance();
    const { state } = shallowComponent;

    chai.expect(state).to.deep.equal({
      results: null,
      searchKey: "",
      searchTerm: "redux",
      error: null,
      isLoading: false
    });
  });

  test("has changed default values after render", () => {
    const shallowComponent = shallow(<HackerNews />, {
      disableLifecycleMethods: true
    }).instance();

    shallowComponent.componentDidMount();
    shallowComponent.render();

    const { state } = shallowComponent;

    chai.expect(state).to.deep.equal({
      results: null,
      searchKey: "redux",
      searchTerm: "redux",
      error: null,
      isLoading: true
    });
  });

  describe("needsToSearchTopStories", () => {
    test("is a valid function", () => {
      const shallowComponent = shallow(<HackerNews />).instance();

      chai.expect(shallowComponent.needsToSearchTopStories).to.be.a("function");

      console.log(shallowComponent.needsToSearchTopStories("redux"));

    });
  });
});
