import React, {Component} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {Assets} from '../../assets';
import Carousel from 'react-native-snap-carousel';

const DeviceWidth = Dimensions.get('window').width;

export class Film extends Component {
  state = {
    activeIndex: 1,
  };
  film = [
    {
      title: 'Enter The Fat Dragon',
      poster: Assets.poster.poster_1,
    },
    {
      title: 'Bad Boys',
      poster: Assets.poster.poster_2,
    },
    {
      title: 'Birds of Prey',
      poster: Assets.poster.poster_3,
    },
    {
      title: '1917',
      poster: Assets.poster.poster_4,
    },
  ];

  renderItem = ({item, index}) => {
    const activeFilm = this.film[this.state.activeIndex];
    const isActive = activeFilm === item;
    return (
      <View key={index}>
        <Image
          source={item.poster}
          key={index}
          style={{width: '90%', height: 270}}
          borderRadius={13}
        />
        {isActive && (
          <Image
            source={Assets.poster.buy_ticket}
            style={{width: '90%', height: 40, position: 'absolute', bottom: 0}}
          />
        )}
      </View>
    );
  };

  render() {
    const activeFilm = this.film[this.state.activeIndex];
    return (
      <>
        <Carousel
          data={this.film}
          firstItem={1}
          sliderWidth={DeviceWidth}
          itemWidth={DeviceWidth / 2}
          renderItem={this.renderItem}
          inactiveSlideScale={5}
          inactiveSlideOpacity={1}
          loop={true}
          onSnapToItem={activeIndex => this.setState({activeIndex})}
        />
        <View style={{marginTop: 15}}>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            {activeFilm.title}
          </Text>
        </View>
      </>
    );
  }
}
