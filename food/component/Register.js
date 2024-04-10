
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View , Image, SafeAreaView} from 'react-native';
import axios from 'axios';
import localhost from '../config';
import Link from '@react-navigation/native/src/Link';
export default function Register({navigation}) {

  const [name,setName]= useState('');
  const [email,setGmail] = useState('');
  const [password,setPassword] = useState('');
  const[confirmPassword, setconfirmPassword] =useState('');

  const handlesubmit = async () => {
    try {
      const response = await axios.post(`http://${localhost}/api/v1/register`, {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      });
      
      console.log(response.data); // Log response data for debugging
  
      if (response.data === 'success') {
        console.warn('You have already logged in.'); // Log a warning if registration is not successful
      } else {
        navigation.navigate('login'); // Navigate to login screen if registration is successful
      }
    } catch (error) {
      console.log(error)
      console.error('An error occurred during registration:', error); // Log the error for debugging
      alert('An error occurred during registration. Please try again later.'); // Display an error message to the user
    }
  };
  

  return (
    
    <View style={styles.container}>

           <Image source={require("../assets/login.png")} style={{width:300,height:300}} />
    
        <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}> welcome to Recipe</Text>

      {/* <View style={styles.subcont}> */}
      <TextInput placeholder='  Name'
       style={styles.input} 
       value={name}
       onChangeText={text => setName(text)} 
       />
      <TextInput placeholder='  email' 
      value={email}
      onChangeText={text => setGmail(text)}
      style={styles.input} />
      <TextInput placeholder='  password'
      value={password}
      onChangeText = {text => setPassword(text)}
       style={styles.input}
      />
      <TextInput placeholder=' confirmPassword'
      value={confirmPassword}
      onChangeText = {text => setconfirmPassword(text)}
       style={styles.input}
      />
        
      <View >
      <TouchableOpacity>
      
      <Button title='Register' color='green' onPress={handlesubmit} />
      </TouchableOpacity>
      
      <View style={{marginTop:20}}>
      <TouchableOpacity >
      <Link to='/login' style={{color:'red',fontSize:20,paddingLeft:10 }}>
        or login
        </Link>
      </TouchableOpacity>
       
      </View>
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
  
  },
  subcont :{
    width:300,
    height:400,
    backgroundColor:'grey',
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
    paddingVertical: 0
   
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

