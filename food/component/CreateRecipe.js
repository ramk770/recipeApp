import React, { useRef, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableHighlight, FlatList, Image, Animated } from "react-native";
import { useRoute } from '@react-navigation/native';
import localhost from '../config';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        axios.get(`http://${localhost}/api/v1/recipe`)
            .then(res => {
                setRecipe(res.data.data.recipe);
            })
            .catch(error => console.log(error));
    }, []);

    const renderItem = ({ item }) => (
        <Animated.View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'white', margin: 10, borderRadius: 20 }}>
            {item.image && <Image source={{ uri: item.image }} style={{ width: 100, height: 100, marginRight: 10 }} />}
            <View style={{ flex: 1, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginHorizontal: 16 }}>{item.title}</Text>
                <Text style={{ fontSize: 14, marginHorizontal: 16 }}>Rating: {item.rating}</Text>
            </View>
        </Animated.View>
    );

    return (
        <LinearGradient colors={['#2de0fd', '#f7fdf9', '#f7fdf9']} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableHighlight>
                    <Text style={{ fontSize: 25, color: "black", fontWeight: 'bold', marginTop: 35, marginHorizontal: 16 }}>
                        Favourite
                    </Text>
                </TouchableHighlight>
                <FlatList
                    data={recipe}
                    renderItem={renderItem}
                    keyExtractor={item => item.id} // Assuming id is a unique identifier, convert to string if necessary
                />
            </SafeAreaView>
        </LinearGradient>
    );
}

export default CreateRecipe;
