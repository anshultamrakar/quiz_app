import React from 'react';

import FrontPage from "./FrontPage";

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("check rendering" , () => {
   
    it("rendering the component", () =>{
        wrapper = shallow(<FrontPage/>)
    })
})