import React, {Component} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {Icons} from '../../assets';
import Carousel from 'react-native-snap-carousel';

const DeviceWidth = Dimensions.get('window').width;

export class Promo extends Component {
  promos = [Icons.promo_1, Icons.promo_2, Icons.promo_3];

  renderItem = ({item, index}) => (
    <Image source={item} key={index} style={{width: '100%', height: 150}} />
  );

  render() {
    return (
      <Carousel
        data={this.promos}
        sliderWidth={DeviceWidth}
        itemWidth={DeviceWidth}
        renderItem={this.renderItem}
        inactiveSlideScale={5}
        loop={true}
        autoplay={true}
      />
    );
  }
}
