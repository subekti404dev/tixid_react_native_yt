import React from 'react';
import {View, Text} from 'react-native';
import { LoginPage } from './src/login/login';

class App extends React.Component {
  render() {
    return (
      <View>
        <LoginPage/>
      </View>
    );
  }
}
export default App;
