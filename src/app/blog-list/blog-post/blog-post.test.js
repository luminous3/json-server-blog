import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ReactDOM from 'react-dom';
import BlogPost from './index';
import Comments from '../comments';

configure({adapter: new Adapter( )});

const blogProps = {
  id: 1,
  title: "Blog 1",
  author: "Alex",
  date: "2018-01-04",
  content: "Test Content",
  description: "Test Desc",
  expanded: false
};

const wrapper = mount(<BlogPost {...blogProps} />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogPost />, div);
});

it('state initializes correctly', () => {
  expect(wrapper.state().id).toEqual(1);
  expect(wrapper.state().title).toEqual("Blog 1");
  expect(wrapper.state().author).toEqual("Alex");
  expect(wrapper.state().date).toEqual("2018-01-04");
  expect(wrapper.state().content).toEqual("Test Content");
  expect(wrapper.state().expanded).toEqual(false);
});

it('do not render back link when not expanded', () => {
  expect(wrapper.find('.back').exists()).toEqual(false);
  expect(wrapper.find('.content').exists()).toEqual(false);
});

it('renders author and date', () => {
  expect(wrapper.find('.footer').exists()).toEqual(true);
  expect(wrapper.find('.author').exists()).toEqual(true);
  expect(wrapper.find('.date').exists()).toEqual(true);
});
