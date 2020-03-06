import React from 'react';
import RemainingCharacters from '../src/components/RemainingCharacters'

import Enzyme, { shallow, render, mount } from 'enzyme';


describe('<RemainingCharacters charCount={charCount} />', () => {
  it('should render a number to with the remaining characters available', () =>{
    const props = {
      value: 'Hello World'
    }
    let RemainingCharactersComponent = mount(<RemainingCharacters {...props} />);
    expect(RemainingCharactersComponent.prop('value')).toBe('Hello World');
  })
});
