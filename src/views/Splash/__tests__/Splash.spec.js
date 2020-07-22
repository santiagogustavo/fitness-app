import 'react-native';
// import React from 'react';

// import Splash from '../Splash.tsx';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
}));

it.todo('should render');
