import React from "react";
import { shallow } from "enzyme";

import { findByAttr } from "../../../test/utils/locators";
import Home from "./home.component";

const mockData = [{ id: 1, title: "Things Fall apart", body: "Lorem ipsume laeim shaem ien" }];

describe("Home component test", () => {
    it("should test posts heading existence", () => {
        const component = shallow(<Home articles={mockData} />);
        const postHeader = findByAttr(component, "post-heading");

        expect(postHeader.length).toBe(1);
    });
});
