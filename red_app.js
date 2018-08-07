import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Alert, Button, Image} from 'react-native';

//RedReach red hex colour: #e93f42
//https://media.licdn.com/dms/image/C4E0BAQFR1eLdzrw-bw/company-logo_200_200/0?e=2159024400&v=beta&t=tOQIzg2__v6WiQ7wtpppf1-ZnBUAlremN7wFnAZVR04

export default class App extends React.Component {
  render() {
    let url = {
      uri: 'https://www.redrea.ch/wp-content/uploads/2018/05/header-logo.png'
    }
    return (
      <View style={styles.container}>
      <Image source={url} style={{width:200, height:60}}/>
      <View style={{height:30}}/>
      <Text style={{fontWeight:'bold', fontSize:10}}>Username</Text>
      <View style={{height:10}}/>
      <TextInput style={{fontSize:17}} placeholder="Testing"/>
      <View style={{height:20}}/>
      <Text style={{fontWeight:'bold', fontSize:10}}>Password</Text>
      <View style={{height:10}}/>
      <TextInput style={{fontSize:17}} placeholder="Testing" textContentType="password"/>
      <View style={{height:40}}/>
      <View style={{borderColor:"black", borderWidth:2, paddingLeft:40, paddingRight:40, borderRadius:20, borderColor:'#e93f42', color:'#e93f42'}}>
      <Button title="Submit" onPress={() => {Alert.alert("You are logged-in!")}}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop:100,
    alignItems:'center',
  },
});
