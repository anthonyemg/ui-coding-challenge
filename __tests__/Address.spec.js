import React from 'react';
import renderer from 'react-test-renderer';
import CustomProvider from '../CustomProvider';
import Address from '../src/public/components/Address';

test('the Address component renders correctly', () => {
  const component = renderer.create(
    <CustomProvider>
      <Address />
    </CustomProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
