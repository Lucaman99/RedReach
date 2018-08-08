import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Alert, Button, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo';

//RedReach red hex colour: #e93f42
//https://media.licdn.com/dms/image/C4E0BAQFR1eLdzrw-bw/company-logo_200_200/0?e=2159024400&v=beta&t=tOQIzg2__v6WiQ7wtpppf1-ZnBUAlremN7wFnAZVR04

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {on: false}
  }

  onPress = () => {
    this.setState({on: !this.state.on})
    Alert.alert("Pressed!")
  }

  onPressEvent = () => {
    this.setState({on: !this.state.on})
    Alert.alert("Button 2 Pressed!")
  }

  render() {
    let url = {
      uri: 'https://www.redrea.ch/wp-content/uploads/2018/05/header-logo.png'
    }
    let display = this.state.on ? "red":"blue"
    return (
      <LinearGradient colors={["white", "red"]} style={{flex:1}}>
      <ScrollView>
      <View style={styles.container}>
      <View style={{width:200}}>
      <Image source={url} style={{width:200, height:60}}/>
      <View style={{height:30}}/>
      <Text style={{fontWeight:'bold', fontSize:14, color:"white"}}>Username</Text>
      <View style={{height:10}}/>
      <View style={{width:200, borderBottomColor:"white", borderBottomWidth:2, paddingBottom:5, opacity:0.5}}>
      <TextInput style={{fontSize:17, color:"white", opacity:1}} spellCheck={false} autoCorrect={false} autoCapitalize='none'/>
      </View>
      <View style={{height:20}}/>
      <Text style={{fontWeight:'bold', fontSize:14, color:"white"}}>Password</Text>
      <View style={{height:10}}/>
      <View style={{width:200, borderBottomColor:"white", borderBottomWidth:2, paddingBottom:5, opacity:0.5}}>
      <TextInput style={{fontSize:17, color:"white", opacity:1}} spellCheck={false} autoCorrect={false} autoCapitalize='none'/>
      </View>
      <View style={{height:40}}/>
      </View>
      <View style={{width:450}}>
      <TouchableOpacity onPress={this.onPress} style={{borderRadius:1000,alignItems:'center'}}>
      <View style={{borderWidth:2, paddingLeft:40, paddingRight:40, borderRadius:1000, borderColor:'#e93f42',backgroundColor:'#e93f42', width:150}}>
      <Text style={{color:"white",fontWeight:"bold",paddingTop:6, paddingBottom:6,fontSize:17}}>Submit</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.onPressEvent} style={{borderRadius:1000,alignItems:'center'}}>
      <View style={{borderWidth:2, paddingLeft:40, paddingRight:40, borderRadius:1000, borderColor:'#e93f42',backgroundColor:'#e93f42', width:150}}>
      <Text style={{color:"white",fontWeight:"bold",paddingTop:6, paddingBottom:6,fontSize:17}}>Submit</Text>
      </View>
      </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop:100,
    alignItems:'center',
    paddingBottom:50,
  },
});
