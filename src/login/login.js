import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export class LoginPage extends Component {
  state = {
    phoneNumber: '',
    password: '',
  };
  render() {
    return (
      <SafeAreaView>
        <View style={{padding: 10, paddingHorizontal: 20}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>
            Masuk
          </Text>
          <View style={{marginTop: 20}}>
            <CustomInput
              label={'NOMOR TELEPON'}
              placeholder={'+62'}
              onChangeText={phoneNumber => this.setState({phoneNumber})}
            />
            <CustomInput
              label={'PASSWORD'}
              placeholder={'Masukkan Password'}
              onChangeText={password => this.setState({password})}
            />
          </View>
          <Text style={{marginVertical: 10}}>
            Lupa password?{' '}
            <Text style={{fontWeight: 'bold'}}>Reset Password</Text>
          </Text>
          <View style={{marginTop: 10}}>
            <BlockButton
              label={'Masuk'}
              onPress={() => Actions.mainPage()}
              disabled={
                this.state.phoneNumber === '' || this.state.password === ''
              }
            />
            <Text style={{textAlign: 'center', marginVertical: 15}}>
              Belum punya account?
            </Text>
            <BorderButton label={'Daftar Sekarang'} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const CustomInput = props => {
  return (
    <View style={{marginVertical: 15}}>
      <Text>{props.label}</Text>
      <TextInput
        style={{
          fontSize: 18,
          borderBottomColor: '#DEDEDE',
          borderBottomWidth: 1,
          height: 50,
        }}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const BlockButton = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.disabled ? 'grey' : '#1d2c4d',
        height: 55,
        borderRadius: 4,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 19, color: props.disabled ? '#000' : '#FFF'}}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const BorderButton = props => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#1d2c4d',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 19}}>{props.label}</Text>
    </TouchableOpacity>
  );
};
