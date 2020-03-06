import React from 'react';
import {Messages, Message} from '../src/components/Messages';

import { shallow, render, mount } from 'enzyme';


const message = new Message('Test Message', 'Daniel');
let wrapped = shallow(<Messages messages={[message]} />);

describe('Message', () => {
  it('should render the Message Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the Messages children', () => { 
    expect(wrapped.find('ul').text()).toEqual(`${message.text} - ${message.user} - ${message.dateString}`);
  });
});
