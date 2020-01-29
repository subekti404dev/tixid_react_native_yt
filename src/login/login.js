import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export class LoginPage extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{padding: 10, paddingHorizontal: 20}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>
            Masuk
          </Text>
          <View style={{marginTop: 20}}>
            <CustomInput label={'NOMOR TELEPON'} placeholder={'+62'} />
            <CustomInput label={'PASSWORD'} placeholder={'Masukkan Password'} />
          </View>
          <Text style={{marginVertical: 10}}>
            Lupa password?{' '}
            <Text style={{fontWeight: 'bold'}}>Reset Password</Text>
          </Text>
          <View style={{marginTop: 10}}>
            <BlockButton label={'Masuk'} />
            <Text style={{textAlign: 'center', marginVertical: 15}}>
              Belum punya account?
            </Text>
            <BorderButton label={'Daftar Sekarang'}/>
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
      />
    </View>
  );
};

const BlockButton = props => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 55,
        borderRadius: 4,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 19}}>{props.label}</Text>
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
