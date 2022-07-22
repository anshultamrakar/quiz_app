import React from 'react'
import  { useState as useStateMock } from 'react'; 
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Test from './Test'

configure({ adapter: new Adapter() });


const testValues = {
    handleSubmit: jest.fn()
  };

 
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn()
    }),
    useLocation: jest.fn().mockReturnValue({
      pathname: '/test',
      search: '',
      hash: '',
      state: {
        language : 'ReactJS'
      },
      key: '5nvxpbdafa'
    })
  }))
  
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }));


  describe('Test component', () => {
    let wrapper
    let wrapperMount
    let setCount = jest.fn();
    beforeEach(() => {
      useStateMock.mockImplementation(count => [count, setCount]);
      wrapper = shallow(<Test {...testValues}/>);
    });
  
    it('Renders correctly the set states', () => {
      wrapperMount = shallow(<Test/>)
      expect(wrapperMount.exists()).toBeTruthy();
    });
  
    it('handlesubmit work correctly',()=>{
      wrapper.find('form').simulate('submit',{
        preventDefault: () => {}  
      });
      expect(testValues.handleSubmit).toHaveBeenCalledTimes(0);
    })
  
    it('should run triggerCount Method', () => {
  
      wrapper.find('.progress-bar1').simulate('click',1)
      expect(setCount).toHaveBeenCalledWith(1);
      wrapper.find('.progress-bar2').simulate('click',2)
      expect(setCount).toHaveBeenCalledWith(2);
      wrapper.find('.progress-bar3').simulate('click',3)
      expect(setCount).toHaveBeenCalledWith(3);
      wrapper.find('.progress-bar4').simulate('click',4)
      expect(setCount).toHaveBeenCalledWith(4);
      wrapper.find('.progress-bar5').simulate('click',5)
      expect(setCount).toHaveBeenCalledWith(5);
  
    });
  
    it('pagination should work on change', ()=>{
      wrapper.find('#pagination').simulate("change", {
        preventDefault: () => { },
        target : 
        { 
          value: 1
        }                                                                                                  
      });   
      expect(setCount).toHaveBeenCalledWith(1);
    })
  
  });