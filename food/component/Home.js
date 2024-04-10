import React, { useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, Pressable, TextInput, SafeAreaView } from 'react-native';
import RecipeCard from './ShopCard';
import Recente from './Recente';
import localhost from '../config';
import { LinearGradient } from  'expo-linear-gradient';


import { useState , useEffect} from 'react';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import Context from './Context';

// Assuming you're importing the image correctly
const image = require('../assets/recipe4.png');

const Home = ({navigation}) => {
    const {user}=useContext(Context)
    const [isActive, setIsActive] = useState(false);

    

    

    const screen = Dimensions.get('window').width;

     const [recipe, setRecipe] = useState([]);


   
     


    
    useEffect(() => {
        axios.get(`http://${localhost}/api/v1/recipe`)
            .then(res => {
                // console.log(res.data.data.recipe);
                setRecipe(res.data.data.recipe);
            })
            .catch(error => 
            console.log(error) );
    },[]);

    
    const renderItem = ({ item }) => {
     
        // console.log(item)
        return (
            <View style={styles.cardContainer} key={item.id}>
             <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("recipe", {item})}>
             <FontAwesome name='heart' size={24} color="red" />
                    </TouchableOpacity>
                <Image source={{uri:item.image}} style={styles.image}  />
                <Text style={styles.title} onPress={() => navigation.navigate("detail", {item})}>{item.title}</Text>
                <Text style={styles.author} onPress={() => navigation.navigate("detail", {item})}>{item.rating} </Text>
                <View style={{flexDirection:'row'}}>
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />

                </View>
                
            </View>
        );
    };

{/* <i class="fa-sharp fa-regular fa-star-sharp"></i> */}


    return ( 

    
          <View style={styles.contin}>
            {/* <LinearGradient  colors={[ '#fdbb2d','#ffffff']}> */}
            <LinearGradient  colors={['#2de0fd', '#f7fdf9', '#f7fdf9']}>
             <Text style={{marginTop:35, 
             fontSize:30,
             fontWeight:'bold',color:"white"}} >
             Welcome 
             
            </Text>
           <View style={{flexDirection:'row',marginHorizontal:16,
            }}>     
          <Text 
          style={{fontSize:20,fontWeight:'bold',flex:1, color:'white'}}>{user.user}  </Text>
            
        <FontAwesome name="bell" size={28} color="green" />
           
</View>
         
          

           {/* serach bar  */} 
            <View style={{flexDirection: 'row',margin:5, marginTop:10}} >
        <View style={styles.Container}>
        <FontAwesome name="search" size={28} style={{marginLeft:20}} />
        <TextInput placeholder="Search" style={styles.input} /> 
      </View>
      
        <View style={styles.sortBtn}>
        <FontAwesome  name="reorder"  size={28} color='white' />
    </View>

           </View> 
            {/* toplist data */}
            <View style={styles.subcon1}>
            
             <View style={{ width: 150, justifyContent: 'center', height: 50, margin: 10, borderRadius: 10 }}>
                <TouchableOpacity
                    
                    activeOpacity={0.7}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 100, margin: 10, textAlign: 'center',}} onPress={() => navigation.navigate('veg') }>Vegetarian</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: 150, justifyContent: 'center', height: 50,  margin: 10, borderRadius: 10 }}>
                <TouchableOpacity
                    
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 100, margin: 10, textAlign: 'center',  }} onPress={() => navigation.navigate("nonveg")}>NonVegetarian</Text>
                </TouchableOpacity>
            </View>
            </View>


            <View style={{flexDirection:'row', marginHorizontal:16
            }}>     
          <Text style={{fontSize:20,
          fontWeight:'bold',flex:1}}>Top Recipe</Text>
            
            
            <Text style={{fontSize:20,
            fontWeight:'bold'}}>See all</Text>
            

           </View>    
          <View style={{padding:10}}>
         
                <RecipeCard  /> 
          
           
          </View>

          <View style={{flexDirection:'row',
           marginHorizontal:16}}>     
          <Text style={{fontSize:20,
          fontWeight:'bold', flex:1}}>
           Recente Recipe </Text>
            
            
        <Text style={{fontSize:20,
            fontWeight:'bold'}} onPress={() => navigation.navigate("show")}>See all</Text>
            

           </View> 

  <View>
  {/* //2 data shows */}
  
 
        <FlatList
                data={recipe}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                horizontal={false}
                numColumns={2}
                
            /> 
            
            
            
  </View>
     
  
</LinearGradient>
            
            
        </View>
        
      
        
       
    );
}

const styles = StyleSheet.create({
    contin: {
        flex: 1,
    
       
    },
    subcon1 :{
        margin:10,
        flexDirection:'row'
        
        // justifyContent:'space-between'
    },
    categary :{
        
        
    },
    circularImage: {
        width: 50, // Adjust width as needed
        height: 50, // Adjust height as needed
        borderRadius: 75, // Half of the width and height to create a circle
      },
      Container: {
        height: 50,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color:'black',
        borderColor:'black'
      },
      sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      },
    //   2 data show
    listContainer: {
        padding: 10,
        height:"10000%",
    
    },
    cardContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        // marginHorizontal: 10,
        alignSelf:"flex-end"
    },

});

export default Home;
