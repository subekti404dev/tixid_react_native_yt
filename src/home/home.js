import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Location} from './location';
import { Promo } from './promo';

export class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Location />
        <Promo />
      </SafeAreaView>
    );
  }
}
