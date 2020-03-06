import React from 'react';
import RemainingCharacters from '../src/components/RemainingCharacters'
import expect from 'expect';
import Enzyme, { shallow, render, mount } from 'enzyme';


describe('<RemainingCharacters charCount={charCount} />', () => {
  it('should take in a string', () =>{
    const props = {
      value: 'Hello World'
    }
    let RemainingCharactersComponent = mount(<RemainingCharacters {...props} />);
    expect(RemainingCharactersComponent.prop('value')).toBe('Hello World');
  })
});
describe('<RemainingCharacters charCount={charCount} />', () => {
  it('should render a number to with the remaining characters available', () =>{
    
    let wrapper = shallow(<RemainingCharacters charCount={0} />);
    expect(wrapper.text()).toEqual("Characters left: 100")
  })
});
