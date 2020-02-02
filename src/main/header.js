import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Assets} from '../../assets';

export class Header extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#FFF',
          height: 55,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          zIndex: 2,
          elevation: 2,
        }}>
        <View style={{flex: 1}}>
          <Image source={Assets.profile_icon} style={{width: 35, height: 35}} />
        </View>
        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={Assets.logo} style={{width: 100, height: 35}} />
        </View>
        <View style={{flex: 1}}></View>
      </View>
    );
  }
}
