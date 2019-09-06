import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTitle = props => {
    return (
        <TouchableOpacity 
            onPress={props.onSelect}
            style={styles.gridItem}
        >
            <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                <Text 
                    style={styles.title}
                    numberOfLines={2}
                >
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        padding: 15,
        justifyContent: "flex-end",
        alignItems: 'flex-end'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'right'
    }
});

export default CategoryGridTitle;