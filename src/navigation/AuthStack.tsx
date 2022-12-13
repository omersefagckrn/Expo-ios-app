import * as React from 'react';
import * as Pages from '../pages';

import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type AuthStackParamList = {
	Login: undefined;
	Register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const options: NativeStackNavigationOptions = {
	headerShown: false
};

const AuthStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={options}>
			<Stack.Screen name='Login' component={Pages.Login} />
			<Stack.Screen name='Register' component={Pages.SignUp} />
		</Stack.Navigator>
	);
};

export default AuthStack;
