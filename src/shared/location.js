import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Assets} from '../../assets';

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          backgroundColor: this.props.backgroundColor || '#FFF',
          zIndex: -10,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Assets.location_icon}
            style={{width: 35, height: 35}}
          />
          <Text style={{fontSize: 20, color: '#5B5D5F'}}>Bandung</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Image
            source={Assets.arrow_down_icon}
            style={{width: 35, height: 35}}
          />
        </View>
      </View>
    );
  }
}
