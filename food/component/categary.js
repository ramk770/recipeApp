import React,{useState} from 'react';
import { StyleSheet, Text, View,Modal,Alert,KeyboardAvoidingView,Button,TextInput, Image, ToastAndroid, ScrollView} from 'react-native';
// import {TextInput,Button, IconButton} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import localhost from '../config';
import { LinearGradient } from  'expo-linear-gradient';
import axios from 'axios';


const ImageUpload = () => {

    const [title,setTitle] = useState("")
    const [discrip,setDescrip] = useState("")
    const [image,setImage] = useState("")
    const [recipeId,setRecipeId] = useState("")
    const [rating,setRating] = useState("");
    const [ingredients, setingredients] = useState("");
    const [instructions, setinstructions] = useState("");
    const [modal,setModal] = useState(false);


    
    const submitData = ()=>{
        // console.log(picture);
      
        axios.post(`http://${localhost}/api/v1/recipe`,
        {
          title:title,
          discrip:discrip,
          image:image,
          recipeId:recipeId,
           rating:rating,
           ingredients:ingredients,
           instructions:instructions
      }).then((res)=>{
        alert("recipes loaded uploaded");
        }).catch((e)=>{
            alert('Some error occured!');
          })

   
  }


const pickFromGalleryWithPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (status === "granted") {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.5,
        });

        if (!result.canceled) {
          const image = result.assets[0]; // Access image from "assets" array
  
          const newFile = {
            uri: image.uri,
            type: `test/${image.uri.split(".").pop()}`, // Use `pop()` instead of indexing
            name: `test.${image.uri.split(".").pop()}`,
          };
  
          handleUpload(newFile);
          setModal(false);
        }
      } catch (error) {
        console.error(error.message); // handle error
      }
    } else {
      Alert.alert("Permission denied for accessing the gallery");
    }
  };
  const pickFromCameraWithPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
  
    if (status === "granted") {
      try {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.5,
        });
        if (!result.canceled) {
            const image = result.assets[0]; // Access image from "assets" array
    
            const newFile = {
              uri: image.uri,
              type: `test/${image.uri.split(".").pop()}`, // Use `pop()` instead of indexing
              name: `test.${image.uri.split(".").pop()}`,
            };
    
            handleUpload(newFile);
            setModal(false);
          }
        } catch (error) {
          console.error(error.message); // handle error
        }
    } else {
      Alert.alert("Permission denied for accessing the camera");
    }
  };
     const handleUpload = (image)=>{
          const data = new FormData()
          data.append('file',image)
          data.append('upload_preset','mfg5ed3t')
          data.append("cloud_name","daqnlvhjm")
          
          // https://api.cloudinary.com/v1_1/dv31wonpd
          fetch("https://api.cloudinary.com/v1_1/dv31wonpd/image/upload",{
              method:"post",
              body:data
          }).then(res=>res.json()).
          then(data=>{
              setImage(data.url)
              alert("images loaded uploaded")
              setModal(false)
          }).catch(err=>{
              Alert.alert("error while uploading")
          })
     }
     
    return(
      <ScrollView>
    

      
    <LinearGradient  colors={['#2de0fd', '#f7fdf9', '#f7fdf9']}>

      <View style={{flex:1,justifyContent: 'center',
      alignItems: 'center', }}>
      
        <View style={styles.container}>
          
         <Text style={{alignSelf:"center",fontSize:35}}>Craft your recipe</Text>  
            <Text style={styles.text}>
            recipe id
            </Text>
            <TextInput type="text" placeholder="recipeid" style={styles.input}  value={recipeId}
      onChangeText={text => setRecipeId(text)}/>
            <Text style={styles.text}>
            recipe name
            </Text>
            <TextInput type="text" placeholder="recipename" style={styles.input}  value={title}
      onChangeText={text => setTitle(text)}/>
            <Text style={styles.text}>
            discription
            </Text>
             <TextInput type="text" placeholder="discriptionn" style={styles.input}
            value={discrip}
            onChangeText={text => setDescrip(text)} /> 
             <Text style={styles.text}>
             Ingredients
            </Text>
             <TextInput type="text" placeholder="discriptionn" style={styles.input}
            value={ingredients}
            onChangeText={text => setingredients(text)} /> 
             <Text style={styles.text}>
             Instructions
            </Text>
             <TextInput type="text" placeholder="discriptionn" style={styles.input}
            value={instructions}
            onChangeText={text => setinstructions(text)} /> 
            
             
            <Text style={styles.text}>
             Rating
            </Text>
             <TextInput type="text" placeholder="discriptionn" style={styles.input}
            value={rating}
            onChangeText={text => setRating(text)} /> 
            <View  style={{width:170,alignSelf:'center',}}>
             <Button 
             style={styles.btn}
             color="green"
              title="Upload Image"
              onPress={() => setModal(true)}>
                    
             </Button>
             </View>
             
             <View style={{width:170,alignSelf:'center',}}>
             <Button 
             
             color="green"
             title="Upload"
             onPress={() => submitData()}>   
            </Button>
             </View>
             
             
     
             
             <Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             > 
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button 
                         theme={theme}
                        title='camera'
                         onPress={() =>pickFromCameraWithPermissions()}>
                                
                        </Button>
                        <Button 
                         theme={theme}
                         title=' gallery'
                          onPress={() => pickFromGalleryWithPermissions()}>
                               
                        </Button>
                  </View>
                <Button 
                 title='cancel'
                onPress={() => setModal(false)}>
                        
                </Button>
              </View>
              </Modal> 
                           </View>
                           </View>
                           </LinearGradient>      
                           
                           </ScrollView>
                           
    )
 };
 const styles=StyleSheet.create({
  
  container: {
    
    padding: 10,

    width: 330,
    gap: 10,
  
  
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop:60,  
},

    inputStyle:{
        margin:"4%",
        borderWidth:2,
        borderColor: '#f5f5f5',
        backgroundColor: '#f5f5f5',
        padding:20,

    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white"

    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },btn:{
        backgroundColor:"blue",
        borderRadius:30,
    },
    textarea:{
        height:"30%",
        borderWidth:2,
        borderColor:"black",
        margin:"4%"
    },
    lable:{
      fontSize:25,
      paddingLeft:20
    },
    
  input :{
  
    
    width:300,
    height:40,
    borderWidth:2,
    borderColor:'grey',
    borderRadius:15,
     fontSize:15,
     padding:10
      
      
     
   },
   text : {
    fontSize:20,
    fontWeight:"500",
   }

})
const theme = {
    colors:{
        primary:"#006aff"
    }
}
 
  
  export default ImageUpload;