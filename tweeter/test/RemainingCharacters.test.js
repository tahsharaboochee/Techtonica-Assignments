import React from 'react';
import RemainingCharacters from '../src/App';
import Enzyme, { shallow, render, mount } from 'enzyme';


describe('<RemainingCharacters charCount={charCount} />', () => {
  it('should render a number to with the remaining characters available', () =>{
    const props = {
      value: 'Hello World'
    }
    let RemainingCharactersComponent = mount(<RemainingCharacters {...props} />);
    // let wrapper = shallow(<RemainingCharacters/>);
    expect(RemainingCharactersComponent.prop('value')).toBeString();
  })
});
