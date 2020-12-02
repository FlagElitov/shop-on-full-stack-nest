import { shallow } from "enzyme";
import React from "react";
import Button from "../component/Card/Button/Button";

const setUp = () => shallow(<Button />);

describe("Unit Testing App component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });
  it("App Snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
