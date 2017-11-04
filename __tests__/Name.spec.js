import React from 'react';
import renderer from 'react-test-renderer';
import CustomProvider from '../CustomProvider';
import Name from '../src/public/components/Name';

test('the Name component renders correctly', () => {
  const component = renderer.create(
    <CustomProvider>
      <Name />
    </CustomProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
