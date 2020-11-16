import React from "react";
import { shallow } from "enzyme";

import Artcle from "./article.component";

describe("Article component test", () => {
    it("should test the article props", () => {
        const component = shallow(<Artcle title="Hello" body="body body" />);
        const title = component.find("h4");
        const body = component.find("p");

        expect(title.contains("Hello")).toEqual(true);
        expect(body.contains("body body")).toEqual(true);
    });
});
