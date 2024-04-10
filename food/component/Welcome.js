
import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Dimensions, Button, TouchableOpacity, Pressable } from 'react-native';
import Login from './Login'

const Welcome = ({navigation}) => {
  const screen = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: 1,
      img: require('../assets/food4.jpg'),
    }
  
  ];


  //scroll logic
  
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
  
    const index = Math.round(scrollPosition / screen);
    // console.log({index})
    setCurrentIndex(index);
  };

  const renderData = ({ item }) => {
    return (
      <View>
        <Image source={item.img} style={styles.image} />
        <Text style={{color:"red",fontSize:23,alignSelf:"center",padding:10}}> 80k+ Premium Recipe</Text>
        <Text style={{color:"black",fontSize:35,fontWeight:"bold",alignSelf:"center", padding:10}}> Cook like a Chef</Text>
      </View>
    );
  };
// dot logic
  const renderDotData = () => {
    return data.map((dot, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          { backgroundColor: index === currentIndex ? 'red' : 'green' },
        ]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderData}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll} // Corrected the onScroll prop
      />
      {/* <View style={styles.dotsContainer}>
       {renderDotData()}
      </View> */}
      <Pressable onPress={( )=> navigation.navigate('login') }>
      <View style={{
        height:50,borderColor:"black",borderRadius:150,justifyContent:"center",alignItems:"center", marginBottom:30,backgroundColor:"green",width:300, alignSelf:"center"}}>
         <Text  style={{alignSelf:"center",color:"white",fontSize:20}} >Go Login</Text>

      </View>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20,
  },
  image: {
    resizeMode:"cover",
    height: 500,
    width: Dimensions.get('window').width,
    
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent:'center'
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default Welcome;
