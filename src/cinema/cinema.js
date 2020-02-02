import React, {Component} from 'react';
import {SafeAreaView, Text, ScrollView, View, Image} from 'react-native';
import {Location} from '../shared/location';
import {Assets} from '../../assets';

export class Cinema extends Component {
  cinemas = [
    '23 PASKAL SHOPPING CENTER CGV',
    'BEC MALL CGV',
    'BRAGA XXI',
    'BTC XXI',
    'CIWALK XXI',
    'EMPIRE XXI BANDUNG',
    'FESTIVAL CITYLINK XXI',
    'JATOS',
    'KING SHOPPING CENTER CGV',
    'METRO INDAH MALL CGV',
    'MIKO MALL CGV',
  ];

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <Location backgroundColor={'#F3F4F5'} />
          {this.cinemas.map((cinema, index) => (
            <Item data={cinema} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const Item = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomColor: '#E1E4E4',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 17, color: '#004068'}}>{props.data}</Text>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <Image source={Assets.arrow_right} style={{width: 25, height: 25}} />
      </View>
    </View>
  );
};
