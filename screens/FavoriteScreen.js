import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoriteScreen = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    if (favoriteMeals.length === 0 || !favoriteMeals) {
        return (
            <View style={styles.content}>
                <Text>No favorite meals found.</Text>
            </View>
        );
    }

    return (
        <MealList
            listData={favoriteMeals}
            navigation={props.navigation}
        />
    )
};

FavoriteScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Menu"
                    iconName='ios-menu'
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FavoriteScreen;