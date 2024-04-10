import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

function Setting({navigation}) {
  return (
    <View style={{flex:1 }}>
    <View style={{marginTop:40, marginHorizontal:16, flexDirection:'row'}}>
    <FontAwesome name='arrow-left' size={20} color="black" style={{marginHorizontal:16 }}  onPress={() => navigation.navigate("home")}/>
    <Text style={{fontSize:25, color:"black",fontWeight:'bold'}}> Settings</Text>
    </View>
    <TouchableOpacity>
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'white', margin: 10, borderRadius:20}}>
        <FontAwesome name='language' size={40} color="black" style={{marginHorizontal:16 }} />
      <View style={{ flex: 1 , marginHorizontal:10}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' , flex:2}}>Language </Text>
        <Text> multiple </Text>
      </View>
    </View> 
    </TouchableOpacity>
<TouchableOpacity>
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'white', margin: 10, borderRadius:20}}>
        <FontAwesome name='bell' size={40} color="black" style={{marginHorizontal:16 }} />
      <View style={{ flex: 1 , marginHorizontal:10}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' , flex:2}}>notification </Text>
        
      </View>
    </View> 

    </TouchableOpacity>
    </View>
    
  
  )
}

export default Setting
