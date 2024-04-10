import React from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const Details = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
    
  return (
    <ScrollView>
    <LinearGradient  colors={['#2de0fd', '#f7fdf9', '#f7fdf9']}>
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <SafeAreaView style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 35 }}>
          <Pressable onPress={() => navigation.goBack()} style={{ flex: 1 }}>
            <FontAwesome
              name="arrow-left"
              size={25}
              color="black"
              style={{ flex: 1 }}
            />
          </Pressable>
          <FontAwesome name="heart" size={25} color="red" />
        </SafeAreaView>

        <View style={{
          backgroundColor: 'white',
          marginTop: 200,
          flex: 1,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
          alignItems: 'center'
        }} >
          <View style={{
            // backgroundColor: 'red',
            width: 250,
            height: 250,
            position: 'absolute',
            top: -200
          }}>
            <Image source={{ uri: item.image }}
              style={{
                width: "100%", height: '100%',
                resizeMode: "contain", borderRadius: 200
              }} />
          </View>

          <View style={{ marginTop: 70 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: "center" }}>
              {item.title}
            </Text>
            {/* recipe description */}
            <Text style={{ fontSize: 18, marginVertical: 16, margin: 10 }}>
              {item.discrip}           </Text>
          </View>

          {/* recipes name */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width:"100%", height:80, }}>
            <View style={{ backgroundColor: 'pink', alignItems:'center',paddingHorizontal:16,paddingVertical:26, }}>
            <FontAwesome
              name="fire"
              size={35}
              color="red"
              
            />
          
             
              {/* <FontAwesome name="clock" size={20} color='red' /> */}
              <Text>Medium</Text>
            </View>
            <View style={{ backgroundColor: 'pink', alignItems:'center',paddingHorizontal:16,paddingVertical:26 }}>
              {/* <Image
                source={require('../assets/recipe1.png')} // Check your image path
                style={{ width: '50%', height: '50%', margin: 5 }}
                resizeMode="contain" // Add resizeMode if necessary
              /> */}
              <FontAwesome
              name="heart"
              size={25}
              color="white"
              
            />
              <Text>50 min</Text>
            </View>
            <View style={{ backgroundColor: 'pink', alignItems:'center',paddingHorizontal:16,paddingVertical:26 }} >
            <FontAwesome
              name="heart"
              size={25}
              color="white"
              
            />
              <Text>hello</Text>
            </View>
          </View>

          {/* Ingredients */}
          <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-start' }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10 }} >Ingredients... </Text>
              <Text style={{ margin: 10, fontSize: 15 ,padding:10}}>
                {item.ingredients.join(", ")}
              </Text>
            </View>
            <View style={{  justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-start' }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10 }} >instructions... </Text>
              <Text style={{ margin: 10, fontSize: 20,fontWeight:"300", padding:10 }}>
                {item.instructions}
              </Text>
            </View>
          </View>
        </View>
      </View>
      </LinearGradient>
    </ScrollView>
  );
}

export default Details;
