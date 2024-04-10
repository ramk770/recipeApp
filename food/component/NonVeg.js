
import React from 'react'
import { View , Text, Pressable, Image, SafeAreaView} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {useState, useEffect} from "react";
import axios from "axios";
import localhost from '../config';
import { LinearGradient } from  'expo-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';

function NonVeg({navigation}) {
  
    const [nonveg,setnonveg] = useState([]);

    useEffect(() => {
        axios.get(`http://${localhost}/api/v1/recipe`)
             
            .then(res => {
               
                setnonveg(res.data.data.recipe);
            })
            .catch(error => 
            console.log(error) );
    },[]);

   const renderVeg =  ({item}) => {
     return(
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'white', margin: 10, borderRadius: 20 }}>
        <Image source={{uri:item.image}} style={{ width: 200, height: 200, marginRight: 10 }} />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ fontSize: 14 }}>Rating: 2374/5</Text>
        </View>
    </View>
     )

   }





  return (
    <SafeAreaView>
    <View>
          <LinearGradient  colors={['#2de0fd', '#f7fdf9', '#f7fdf9']}>
       <View style={{marginTop:35,marginHorizontal:16, flexDirection:'row',marginHorizontal:15}}> 
   <Pressable onPress={() => navigation.goBack()} style={{marginHorizontal:10,marginTop:5}}>
<FontAwesome
    name="arrow-left"
    size={25}
    color="black"
    style={{ flex: 1 }}
    
/>
</Pressable>
    <Text style={{fontSize:30,color:'black',fontWeight:'bold'}}>NonVegetarian</Text>
   </View>
    
  <View>
    <FlatList 
        data={nonveg}
        keyExtractor={ item => item.id}
        renderItem={renderVeg}
    />
  </View>
</LinearGradient>
    </View>
    </SafeAreaView>
  )
}

export default NonVeg;

