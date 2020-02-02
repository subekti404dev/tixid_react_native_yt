import React, {Component} from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import {Location} from '../shared/location';
import {Promo} from './promo';
import {Headline} from './headline';
import {Film} from './film';
import { TixNow } from './tix_now';

export class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <Location />
          <Promo />
          <Headline title={'Sedang Tayang'} />
          <Film />
          <Headline title={'Tix Now'} />
          <TixNow />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
