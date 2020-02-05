import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {Assets} from '../../assets';

export class Upcoming extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          paddingTop: 20,
        }}>
        <ImageBackground
          source={Assets.ticket_bg}
          style={{width: 400, height: 350}}
          resizeMode={'contain'}>
          <View
            style={{
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <View style={{flex: 1, padding: 5}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      color: '#FFD780',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    BAD BOYS FOR LIFE
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: '#FFF', fontWeight: 'bold', fontSize: 20}}>
                    XXI
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 1}}>
                  <Text
                    style={{color: '#959AA5', fontSize: 17, paddingBottom: 7}}>
                    Minggu
                  </Text>
                  <Text
                    style={{color: '#FFF', fontSize: 19, fontWeight: 'bold'}}>
                    02 Feb
                  </Text>
                  <Text
                    style={{color: '#FFF', fontSize: 17, fontWeight: 'bold'}}>
                    2020
                  </Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    paddingBottom: 20,
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      borderLeftColor: 'grey',
                      borderLeftWidth: 0.5,

                      borderRightColor: 'grey',
                      borderRightWidth: 0.5,
                    }}>
                    <Text
                      style={{
                        color: '#959AA5',
                        fontSize: 17,
                        paddingBottom: 7,
                      }}>
                      Bioskop
                    </Text>
                    <Text
                      style={{color: '#FFF', fontSize: 19, fontWeight: 'bold'}}>
                      EMPIRE XXI BANDUNG
                    </Text>
                    <Text
                      style={{color: '#FFF', fontSize: 17, fontWeight: 'bold'}}>
                      Studio 4
                    </Text>
                  </View>
                </View>
                <View style={{flex: 1, paddingLeft: 20}}>
                  <Text
                    style={{color: '#959AA5', fontSize: 17, paddingBottom: 7}}>
                    Jam
                  </Text>
                  <Text
                    style={{color: '#FFF', fontSize: 19, fontWeight: 'bold'}}>
                    19:15
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 2.5,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    paddingTop: 20,
                  }}>
                  <View style={{flex: 1}}>
                    <Text style={{color: '#705720', marginVertical: 3}}>
                      Kode Booking
                    </Text>
                    <Text style={{color: '#705720', marginVertical: 3}}>
                      Jumlah Tiket
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginVertical: 3,
                        backgroundColor: '#F2CD8B',
                        width: 60,
                        padding: 5,
                        textAlign: 'center',
                        borderRadius: 10,
                      }}>
                      83036
                    </Text>
                    <Text style={{fontWeight: 'bold', marginVertical: 3}}>
                      1 Orang
                    </Text>
                    <Text style={{fontWeight: 'bold', marginVertical: 3}}>
                      F7
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={Assets.qr} style={{width: 90, height: 90}} />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  borderTopColor: 'grey',
                  borderTopWidth: 0.5,
                  paddingTop: 8
                }}>
                <View style={{flex: 2}}>
                  <Text style={{color: '#705720'}}>
                    Kirim informasi pemesanan ini ke ponsel Anda
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      padding: 5,
                      borderColor: '#01004A',
                      borderWidth: 1,
                      borderRadius: 20,
                      width: 90,
                    }}>
                    <Text style={{color: '#01004A', fontWeight: 'bold'}}>
                      KIRIM SMS
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
