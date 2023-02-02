import * as React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import MainStack, { BottomTabParamList } from './MainStack';
import ModalStack, { ModalStackParamList } from './ModalStack';
import AuthStack, { AuthStackParamList } from './AuthStack';

export type RootStackParamList = {
	Main: NavigatorScreenParams<BottomTabParamList>;
	Modal: NavigatorScreenParams<ModalStackParamList>;
	Auth: NavigatorScreenParams<AuthStackParamList>;
};

const Root = createNativeStackNavigator<RootStackParamList>();

const options: NativeStackNavigationOptions = {
	headerShown: false
};

const RootStack: React.FC = () => {
	return (
		<NavigationContainer>
			<Root.Navigator initialRouteName='Main' screenOptions={options}>
				<Root.Screen name='Main' component={MainStack} />
				<Root.Screen name='Modal' component={ModalStack} />
				<Root.Screen name='Auth' component={AuthStack} />
			</Root.Navigator>
		</NavigationContainer>
	);
};

export default RootStack;
