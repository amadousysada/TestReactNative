import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './app/store'; //Import the store
import Home from './app/components/home' //Import the component file
import Details from './app/components/detail' //Import the component file

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details:{
      screen:Details,
    }

  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}
