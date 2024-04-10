import React from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

function Notification({navigation}) {
  return (
    <View style={{flex:1 }}>
    <View style={{marginTop:40, marginHorizontal:16, flexDirection:'row'}}>
    <FontAwesome name='arrow-left' size={20} color="black" style={{marginHorizontal:16 }}  onPress={() => navigation.navigate("home")}/>
    <Text style={{fontSize:25, color:"black",fontWeight:'bold'}}>Notification</Text>
    </View>
    <TouchableOpacity>
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'white', margin: 10, borderRadius:20}}>
         <Text>gmail:sathiya@gmail.com</Text>
      <View style={{ flex: 1 , marginHorizontal:10}}>
        
       
      </View>
    </View> 
    </TouchableOpacity>
<TouchableOpacity>
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'white', margin: 10, borderRadius:20}}>
        <Text>gmail:ram@gmail.com</Text>
      <View style={{ flex: 1 , marginHorizontal:10}}>
       
        
      </View>
    </View> 

    </TouchableOpacity>
    </View>
    
  )
}

export default Notification
