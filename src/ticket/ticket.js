import React, {Component} from 'react';
import {SafeAreaView, Text, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Upcoming} from './upcoming';
import {Transaction} from './transaction';

export class Ticket extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'upcomingTicket', title: 'TIKET MENDATANG'},
      {key: 'transactionList', title: 'DAFTAR TRANSAKSI'},
    ],
  };
  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#59AFE2'}}
      style={{backgroundColor: 'white'}}
      labelStyle={{color: '#000', fontWeight: 'bold'}}
    />
  );
  renderScene = SceneMap({
    upcomingTicket: Upcoming,
    transactionList: Transaction,
  });
  render() {
    const {index, routes} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <TabView
          renderTabBar={this.renderTabBar}
          navigationState={{index, routes}}
          renderScene={this.renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={Dimensions.get('window').width}
        />
      </SafeAreaView>
    );
  }
}
