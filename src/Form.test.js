import React from 'react'
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from './Form'
configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useHistory : () => ({
push : jest.fn()
})
}))

describe('rendering the form component', () => {
    it('testing', () => {
    let wrapper = shallow(<Form/>)
    })
    it('Updating the state with onchange event ', () => {
    const container = shallow(<Form/>)
    
    container.find('#name-input').simulate('change', {
    target : {
    name : "username",
    value : "xyz" 
    }
    })

    container.find('#gender-input').simulate('change', {
        target : {
        name : "gender",
        value : "male" 
        }
        })

    container.find('#language-input').simulate('change', {
            target : {
            name : "language",
            value : "ReactJS" 
            }
            })


    expect(container.find('#name-input').props().value).toMatch('xyz')
    expect(container.find('#gender-input').props().value).toMatch('male')
    expect(container.find('#language-input').props().value).toMatch('ReactJS')

    })


    it('handleSubmit button', () => {
    const testValues = {
    handleSubmit: jest.fn(),
    };

    const wrapper = shallow(<Form {...testValues}/>)
    wrapper.find('form').simulate('submit',{
    preventDefault: () => {} });
    expect(testValues.handleSubmit).toHaveBeenCalledTimes(0);

    })

    })
