import { shallow, mount, render } from "enzyme";
import * as React from "react";
import Button from "./Button";

const wrapper = shallow(<Button>Test</Button>);

describe("Button Component", () => {
  it("renders as expected", () => {
    expect(wrapper).toBeTruthy();
  });
});
