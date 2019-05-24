import React from "react";
import Result from "./Result";

describe("test Button", () => {
  it("checks click event", () => {
    const mockCallBack = jest.fn();
    const button = () => {};
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
