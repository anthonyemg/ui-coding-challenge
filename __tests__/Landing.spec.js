import React from 'react';
import renderer from 'react-test-renderer';
import CustomProvider from '../CustomProvider';
import Landing from '../src/public/components/Landing';

test('the Landing component renders correctly', () => {
  const component = renderer.create(
    <CustomProvider>
      <Landing />
    </CustomProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
