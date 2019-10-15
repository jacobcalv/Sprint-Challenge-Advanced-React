import React from 'react';
import * as rtl from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import App from './App';

afterEach(rtl.cleanup)

test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible
});

test("Main Header is showing", () => {
  const wrapper = rtl.render(<App/>)
  const element = wrapper.getByText(`Women's World Cup Players Ranked By Search Interest`)
  expect(element).toBeVisible
})

