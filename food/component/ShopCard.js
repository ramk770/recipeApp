import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const image1 = require('../assets/recipe3.png');

const image2 = require('../assets/recipe2.png');

const image3 = require('../assets/recipe4.png');

const image4 = require('../assets/recipe5.png');

const data =[ { id: '1', title: 'Product 1', author: 'Author 1', image: image1 },
{ id: '2', title: 'Product 2', author: 'Author 2', image: image2 },
{ id: '3', title: 'Product 3', author: 'Author 3', image: image3 },
{ id: '3', title: 'Product 3', author: 'Author 3', image: image4 },
]
const ShopCard = ({ item }) => {
    return (
        <TouchableOpacity style={styles.card} >
            <Image source={item.image} style={styles.image}  />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
        </TouchableOpacity>
    );
};


const RecipeCard = () => {
    return(
        
        <FlatList 
         data={data}
         keyExtractor={ item => item.id.toString()}
         renderItem={ShopCard}
         horizontal={true}
         
         />
         
    )
}
const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 150,
        backgroundColor: "lightgrey",
        borderRadius: 10,
        padding: 10,
        marginRight: 20,
        marginRight: 20,
        elevation: 5, // for shadow on Android
        shadowColor: 'black', // for shadow on iOS
        shadowOffset: { width: 0, height: 2 }, // for shadow on iOS
        shadowOpacity: 0.25, // for shadow on iOS
        shadowRadius: 4, // for shadow on iOS
    },
    image: {
        width: "100%",
        height: "100%",
        marginBottom: 10,
        resizeMode:'contain',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 14,
        color: 'gray',
    },
});

export default RecipeCard;
