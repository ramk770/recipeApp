import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import axios from "axios";
import localhost from '../config';
import { useEffect, useState,useContext } from "react";
import Context from './Context';
const Serach = () => {
   const {user}=useContext(Context)



    return ( 

        <View style={{backgroundColor: 'green', flex:1}}>
    <TouchableOpacity style={{marginTop:35,}}>
           <Text style={{fontSize:30,fontWeight:'bold', padding:10,color:'white'}}>Profile</Text>
    </TouchableOpacity>

        <View style={{ backgroundColor:'white',flex:1, marginTop:320,borderTopLeftRadius:60,alignItems:'center'
        }} >
           <View style={{ width:200, height:200, position:"absolute",top: -290,}} >
              <Image source={require('../assets/user1.jpg')} 
              style={{width:'100%', height:"100%", borderRadius:300}} resizeMode='cover' />
                
                 <TouchableOpacity >
                    {/* <Text style={{fontSize:20, fontWeight:'bold', alignSelf:'center',padding:5,color:'white'}}> {user.name}</Text> */}
                    <Text style={{fontSize:20, fontWeight:'bold', alignSelf:'center',padding:5,color:'white'}}> {user.email}</Text>
                </TouchableOpacity> 
                
                <View style={{flexDirection:'row',justifyContent:'space-around',padding:10}}>
                <FontAwesome name="facebook-f" size={30} color="white" />
                <FontAwesome name="instagram" size={30} color="white"  />
                 <FontAwesome name="google" size={30} color="white" />
                </View>
                
               

           </View>
           <TouchableOpacity style={{alignItems:'flex-start'}}>
            <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'flex-start', marginRight:250,marginTop:30}}>About..</Text>
           </TouchableOpacity>
           <View>
            <Text style={{fontSize:18,fontWeight:'500', color:'gray',padding:20}}>
               {user.user} Developer may refer to: Computers edit ·
             Software developer, a person or organization who develop programs/applications; Video game developer, ...
            </Text>
           </View>
         <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'flex-start',margin:10}}>
            phone : <Text style={{fontSize:18}}>9345789023</Text>
         </Text>

        </View>
            
        </View>
     
     );
}
 
export default Serach;