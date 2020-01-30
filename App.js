import React from 'react';
import {View, Text} from 'react-native';
import { LoginPage } from './src/login/login';
import { Router, Scene } from 'react-native-router-flux';
import { MainPage } from './src/main/main';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'root'} hideNavBar>
          <Scene key={'loginPage'} component={LoginPage} />
          <Scene key={'mainPage'} component={MainPage} />
        </Scene>
      </Router>
    );
  }
}
export default App;
