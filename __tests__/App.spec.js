import React from 'react';
import renderer from 'react-test-renderer';
import CustomProvider from '../CustomProvider';
import App from '../src/public/components/App';

test('the App component renders correctly', () => {
  const component = renderer.create(
    <CustomProvider>
      <App />
    </CustomProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
