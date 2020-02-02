import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Assets} from '../../assets';

class TixNow extends Component {
  news = [
    {
      title: 'Rilis Trailer Baru, Karakter Han Kembali di Fast Farious 9',
      img: Assets.news.news_1,
    },
    {
      title:
        'Film Mekah I’m Coming, Film Terbaru Rizky Nazar dan Michelle Ziudith',
      img: Assets.news.news_2,
    },
    {
      title: 'Soundtrack Film Birds of Prey Didominasi Perempuan',
      img: Assets.news.news_3,
    },
    {
      title:
        'Tissa Biani Sempat Kesurupan Saat Syuting Film KKN di Desa Penari ',
      img: Assets.news.news_4,
    },
  ];

  render() {
    return (
      <View>
        {this.news.map((news, index) => (
          <Item data={news} key={index} />
        ))}
      </View>
    );
  }
}

const Item = props => (
  <View
    style={{
      flexDirection: 'row',
      padding: 20,
      paddingLeft: 0,
      borderBottomColor: 'grey',
      borderBottomWidth: 0.5,
      marginLeft: 20
    }}>
    <View>
      <Image
        source={props.data.img}
        style={{width: 90, height: 90}}
        borderRadius={6}
      />
    </View>
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, paddingRight: 10}}>
          <Text style={{fontSize: 16}}>{props.data.title}</Text>
        </View>
        <View
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 10,
            width: 50,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 13, color: 'grey'}}>News</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={Assets.news.eye_icon} style={{width: 20, height: 20}} />
          <Text style={{color: 'grey', fontSize: 13}}>{' 1K'}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={Assets.news.thumb_icon}
            style={{width: 20, height: 20}}
          />
          <Text style={{color: 'grey', fontSize: 13}}>{' 20'}</Text>
        </View>
        <View style={{flex: 4}}>
          <Text style={{color: 'grey', fontSize: 13, textAlign: 'right'}}>
            {'Dari TIX ID Team 1 hari lalu'}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export {TixNow};
