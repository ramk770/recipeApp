import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const data = [
    { id: '1', title: 'Product 1', author: 'Author 1', image: require('../assets/recipe5.png') },
    { id: '2', title: 'Product 2', author: 'Author 2', image: require('../assets/recipe5.png') },
    { id: '3', title: 'Product 3', author: 'Author 3', image: require('../assets/recipe5.png') },
    // Add more products as needed
];



const Recente = ({navigation}) => {
    

    const renderItem = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <Image source={item.image} style={styles.image}   />
                <Text style={styles.title} onPress={() => navigation.navigate("detail")}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.icon}>
                        <FontAwesome name="heart" size={24} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <FontAwesome name="shopping-cart" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };



    return (
        <SafeAreaView>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            horizontal={false}
            
            
            
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
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
        width: 150,
        height: 150,
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
        marginHorizontal: 10,
    },
});

export default Recente;
