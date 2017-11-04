import React from 'react';
import renderer from 'react-test-renderer';
import CustomProvider from '../CustomProvider';
import Favorites from '../src/public/components/Favorites';

test('the Favorites component renders correctly', () => {
  const component = renderer.create(
    <CustomProvider>
      <Favorites />
    </CustomProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
