import React from 'react';
import Messages from '../src/components/Messages';
import { shallow, render, mount } from 'enzyme';


const message = 'Test Message';
let wrapped = shallow(<Messages>{message}</Messages>);

describe('Message', () => {
  it('should render the Message Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the Messages children', () => { 
    expect(wrapped.find('ul').text()).toEqual(message);
  });
});
