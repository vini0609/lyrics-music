import React from 'react';

import { createAppContainer } from 'react-navigation';
import { RootStack } from './config/router';
// Remove this once Sentry is correctly setup.

// App Containers
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
