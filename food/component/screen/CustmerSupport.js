import React from 'react'
import { Text, View , Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function CustmerSupport({navigation}) {
  return (
    <View style={{flex:1,marginTop:35,marginHorizontal:16 }}>
    <View style={{flexDirection:'row',marginTop:10}}>
    <FontAwesome name='arrow-left' size={25} color="black" style={{marginHorizontal:10,marginTop:7 }}  onPress={() => navigation.navigate("home")}/>
        <Text style={{fontSize:30,color:"black", fontWeight:'bold', fontWeight:'bold'}}>
            Customer support
        </Text>
    </View>
     
        <View style={{width:200,height:200,alignItems:'center', alignSelf:'center'}}>
                    <FontAwesome name='headphones' size={120} color="green" style={{marginTop:40}} />
                    <Text style={{fontSize:20,fontWeight:'bold'}}> How can we help you? </Text>
        </View>

        {/* render phone number and  */}
         <View style={{flex:1, marginTop:20}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'white', margin: 10, borderRadius:20}}>
        <FontAwesome name='phone' size={50} color="black" style={{  flex:1,marginHorizontal:16 }} />
      <View style={{ flex: 1 , marginHorizontal:10}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Phone$number </Text>
        <Text style={{ fontSize: 14 }}>9345222840</Text>
      </View>
    </View> 
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'white', margin: 10, borderRadius:20}}>
    <FontAwesome name='envelope' size={50} color="black" style={{  flex:1,marginHorizontal:16 }} />
      <View style={{ flex: 1 , marginHorizontal:10}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>gmail_id </Text>
        <Text style={{ fontSize: 14 }}>ram@gmail.com</Text>
      </View>
    </View> 
        </View> 
    </View>
  )
}
export default CustmerSupport
