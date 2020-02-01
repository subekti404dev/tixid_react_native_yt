import React, {Component} from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';
import {Home} from '../home/home';
import {Icons} from '../../assets';
import {Cinema} from '../cinema/cinema';
import {Ticket} from '../ticket/ticket';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import { Header } from './header';

export class MainPage extends Component {
  state = {
    activeTab: 'beranda',
    activeComponent: Home,
  };
  tabs = [
    {
      key: 'beranda',
      label: 'Beranda',
      component: Home,
      icon: Icons.home,
    },
    {
      key: 'bioskop',
      label: 'Bioskop',
      component: Cinema,
      icon: Icons.cinema,
    },
    {
      key: 'tiket',
      label: 'Tiket',
      component: Ticket,
      icon: Icons.ticket,
    },
  ];

  _renderIcon = tab => ({isActive}) => (
    <Image source={isActive ? tab.icon.active : tab.icon.inactive} style={{width: 33, height: 33}} />
  );

  _renderTab = ({tab, isActive}) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      labelStyle={{
        fontSize: 10,
        color: isActive ? '#000' : 'grey',
        top: -3
      }}
      labelAnimation={() => {}}
      iconAnimation={() => {}}
      renderIcon={this._renderIcon(tab)}
    />
  );

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header/>
        <View style={{flex: 1}}>
          <this.state.activeComponent />
        </View>
        <BottomNavigation
          activeTab={this.state.activeTab}
          onTabPress={tab => {
            this.setState({
              activeTab: tab.key,
              activeComponent: tab.component,
            });
          }}
          tabs={this.tabs}
          renderTab={this._renderTab}
        />
      </SafeAreaView>
    );
  }
}
