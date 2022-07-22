/**
 * @jest-environment jsdom
*/


import React from 'react'
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Finalscore from './Finalscore'

configure({ adapter: new Adapter() });


jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/finalscore',
      search: '',
      hash: '',
      state: {
        language : 'ReactJS',
        selectedAnswers : ['Method','Both 1 & 2','Class','Props','Extends']
      },
      key: '5nvxpbdafa',
    }),
  }));



describe('Rendering the finalscore component', () => {
    let wrapper
    it('Renders correctly and set states', () => {
      wrapper = shallow(<Finalscore/>); 
      expect(wrapper.exists()).toBeTruthy();
    });
  
  });