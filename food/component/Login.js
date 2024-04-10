import axios from 'axios';
import { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Link, Image, SafeAreaView } from 'react-native';
import localhost from '../config';
import Context from "./Context.js";
function Login({navigation}) {
    
   const [email,setEmail]  = useState('');
   const [password, setPassword] = useState('');
   const {user,setuser}=useContext(Context)

   const handlesubmit = async () => {
    try {
      const response = await axios.post(`http://${localhost}/api/v1/login`, {
        email: email,
        password: password
      });
      console.log(response.data.data.user);
      if (response.data.status === 'success') {
        setuser({user:response.data.data.user.name,email:response.data.data.user.email})
        navigation.navigate('mainpage',{email});
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      alert('Error occurred during login:', error);
     }
  };
  
         
  return (
    
    <View style={styles.container}>
    <Image source={require('../assets/login.png')} style={{width:300,height:300}} />
    
        <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}> login </Text>

      {/* <View style={styles.subcont}> */}
      <TextInput placeholder='email'
      value={email}
      onChangeText={text => setEmail(text)}
       style={styles.input} />
      <TextInput placeholder='password'
      value={password}
      onChangeText={text =>setPassword(text) }
       style={styles.input} />
      <View >
      <TouchableOpacity>
      <Button title='Login' color='green' onPress={handlesubmit} />
      </TouchableOpacity>
      </View> 
      
      <View >
        <TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:'bold',color:'red',marginTop:10}} onPress={()=> navigation.navigate('register',{email})}>or new user</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
      
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white"
  },
  subcont :{
    width:300,
    height:400,
    backgroundColor:'white',
    alignSelf:'center', 
    borderRadius:45,
    justifyContent:'center',
    alignItems:'center',
   
shadowOffset: {
	width: 6,
	height: 6,
},
shadowOpacity: 0.5,
shadowRadius: 0.49,
backgroundColor:'#fff',
elevation:12,
marginTop:20,
  },
  input :{
  
   margin:5, 
   width:270,
   height:40,
   borderWidth:2,
   borderColor:'grey',
   borderRadius:15,
    paddingVertical: 0,
    padding:10
   
  },
  submit:{
    margin:5, 
    width:110,
    height:40,
    borderWidth:2,
    
    borderColor:'grey',
    borderRadius:15,
    backgroundColor:'green'
  }
});

export default Login;