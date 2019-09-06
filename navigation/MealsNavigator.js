import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '' : Colors.primaryColor
    },
    headerTitleStyle: {
        fontWeight: 'bold'
    },
    headerTintColor: Platform.OS === 'android' ? '' : 'white'
}

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: {
        screen: MealDetailScreen
    }
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

const MealsTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons 
                        name='ios-restaurant' 
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                )
            }
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons 
                        name='ios-star' 
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                )
            }
        }
    }
}, {
    navigationOptions: {
        drawerLabel: 'Meals'
    },
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontWeight: 'bold'
        }
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavorites: MealsTabNavigator,
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MainNavigator);