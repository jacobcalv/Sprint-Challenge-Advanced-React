import React from 'react';
import {render} from "@testing-library/react"
import App from './App';

test('renders without crashing', () => {
  render(<App/>)
});

test('title is found', () => {
  const {findBy} = render(<App/>);
  findBy(/Women's World Cup Players Ranked By Search Interest/i)
})