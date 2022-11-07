import * as React from 'react';
import * as Pages from '../pages';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type ModalStackParamList = {
	Basket: undefined;
	Payment: undefined;
};

const Stack = createNativeStackNavigator<ModalStackParamList>();

const ModalStack: React.FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Group>
				<Stack.Screen
					options={{
						headerShown: false
					}}
					name='Basket'
					component={Pages.Basket}
				/>
				<Stack.Screen
					options={{
						headerShown: false
					}}
					name='Payment'
					component={Pages.Payment}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default ModalStack;
