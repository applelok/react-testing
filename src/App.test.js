import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import App from "./App";

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

Enzyme.configure({ adapter: new Adapter() });

test("renders learn react link", () => {
    const app = shallow(<App />);
    expect(app.find("a").text()).toEqual("Learn React");
    // expect(wrapper.find('svg')).toBeDefined()

    //  expect(checkbox.text()).toEqual("Off");
    // test("CheckboxWithLabel changes the text after click", () => {
    //     // Render a checkbox with label in the document
    //     const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    //     expect(checkbox.text()).toEqual("Off");

    //     checkbox.find("input").simulate("change");

    //     expect(checkbox.text()).toEqual("On");
});
