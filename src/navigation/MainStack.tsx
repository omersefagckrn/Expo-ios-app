import * as React from 'react';
import * as Pages from '../pages';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import type { IconProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';

export type BottomTabParamList = {
	Home: undefined;
	Profile: undefined;
	Notifications: undefined;
};

const Tab = createMaterialBottomTabNavigator<BottomTabParamList>();

const options: NativeStackNavigationOptions = {
	headerShown: false
};

const MainStack: React.FC = () => {
	return (
		<Tab.Navigator
			barStyle={{
				backgroundColor: '#FFFFFF'
			}}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
					let iconName: IconProps['name'] = '';

					if (route.name === 'Home') {
						iconName = focused ? 'ios-home' : 'ios-home-outline';
					} else if (route.name === 'Notifications') {
						iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
					} else if (route.name === 'Profile') {
						iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
					}
					/* @ts-ignore */
					return <Ionicons name={iconName} size={focused ? 22 : 20} color={color} />;
				}
			})}
			activeColor='#32343E'
			inactiveColor='#AFAFAF'
			initialRouteName='Home'>
			<Tab.Group screenOptions={options}>
				<Tab.Screen name='Home' component={Pages.Home} />
				<Tab.Screen name='Notifications' component={Pages.Notifications} />
				<Tab.Screen name='Profile' component={Pages.Profile} />
			</Tab.Group>
		</Tab.Navigator>
	);
};

export default MainStack;
