import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

useScreens();

const rootReducer = combineReducers({
	meals: mealsReducer
});

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({

});
