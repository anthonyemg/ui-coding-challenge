import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../src/public/components/Modal';

test('the Modal component renders correctly', () => {
  const component = renderer.create(<Modal />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
