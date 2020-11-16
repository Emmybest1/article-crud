import React from "react";
import { shallow } from "enzyme";

import { findByAttr } from "../../../test/utils/locators";

import Header from "./header.component";

describe("Header component test", () => {
    const component = shallow(<Header />);
    it("should render without error", () => {
        const wrapper = component.find(".wrapper");
        expect(wrapper.length).toBe(1);
    });

    it("should test logo is rendered", () => {
        const logo = findByAttr(component, "logo-img");
        expect(logo.length).toBe(1);
    });
});
