import React from 'react';
import renderer from 'react-test-renderer';
import CustomProvider from '../CustomProvider';
import NameModal from '../src/public/components/NameModal';

test('the NameModal component renders correctly', () => {
  const component = renderer.create(
    <CustomProvider>
      <NameModal />
    </CustomProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
