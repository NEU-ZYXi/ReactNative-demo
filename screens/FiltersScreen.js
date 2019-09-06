import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Switch } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { setFilters } from '../store/actions/meals';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                value={props.state} 
                onValueChange={props.onChange}
                trackColor={{true: Colors.primaryColor}}
            />
        </View>
    )
};

const FilterScreen = props => {

    const { navigation } = props;
    const dispatch = useDispatch();

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isBeef, setIsBeef] = useState(false);
    const [isPork, setIsPork] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            vegan: isVegan,
            beef: isBeef,
            pork: isPork
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isVegan, isBeef, isPork, dispatch]);

    useEffect(() => {
        navigation.setParams({filters: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch 
                label='Gluten-free'
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)} 
            />
            <FilterSwitch 
                label='Vegan'
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)} 
            />
            <FilterSwitch 
                label='Beef'
                state={isBeef}
                onChange={newValue => setIsBeef(newValue)} 
            />
            <FilterSwitch 
                label='Pork'
                state={isPork}
                onChange={newValue => setIsPork(newValue)} 
            />
        </View>
    )
};

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
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
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Save"
                    iconName='ios-save'
                    onPress={navData.navigation.getParam('filters')}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FilterScreen;