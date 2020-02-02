import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            {this.props.title}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'right', fontSize: 16, color: 'grey'}}>
            {'Selengkapnya >'}
          </Text>
        </View>
      </View>
    );
  }
}

export {Headline};
