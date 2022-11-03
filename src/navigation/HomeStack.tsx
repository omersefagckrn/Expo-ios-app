import * as React from 'react';
import * as Pages from '../pages';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStackParamList } from '../@types/pages';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.FC = () => {
	return (
		<NavigationContainer>
			<HomeStack.Navigator initialRouteName='Home'>
				<HomeStack.Screen name='Home' component={Pages.Home} />
			</HomeStack.Navigator>
		</NavigationContainer>
	);
};

export default HomeStackNavigator;
