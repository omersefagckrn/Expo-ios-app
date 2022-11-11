import * as React from 'react';
import * as Pages from '../pages';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type ModalStackParamList = {
	Basket: undefined;
	Payment: undefined;
	AddCard: undefined;
};

const Stack = createNativeStackNavigator<ModalStackParamList>();

const ModalStack: React.FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Group>
				<Stack.Screen
					options={({ navigation }) => ({
						headerStyle: {
							backgroundColor: '#181C2E'
						},
						headerTitle: 'Sepetim',
						headerTitleAlign: 'center',
						headerTitleStyle: {
							color: '#FFFFFF',
							fontSize: 16,
							fontWeight: '400',
							fontFamily: 'Sen-Bold'
						},
						headerTintColor: '#FFFFFF',
						headerLeft: () => {
							return <Ionicons onPress={() => navigation.goBack()} name='chevron-back' size={24} color='#FFFFFF' />;
						}
					})}
					name='Basket'
					component={Pages.Basket}
				/>
				<Stack.Screen
					options={({ navigation }) => ({
						headerStyle: {
							backgroundColor: '#181C2E'
						},
						headerTitle: 'Ödeme Yap',
						headerTitleAlign: 'center',
						headerTitleStyle: {
							color: '#FFFFFF',
							fontSize: 16,
							fontWeight: '400',
							fontFamily: 'Sen-Bold'
						},
						headerTintColor: '#FFFFFF',
						headerLeft: () => {
							return <Ionicons onPress={() => navigation.goBack()} name='chevron-back' size={24} color='#FFFFFF' />;
						}
					})}
					name='Payment'
					component={Pages.Payment}
				/>
				<Stack.Screen
					options={({ navigation }) => ({
						headerStyle: {
							backgroundColor: '#181C2E'
						},
						headerTitle: 'Kart Ekle',
						headerTitleAlign: 'center',
						headerTitleStyle: {
							color: '#FFFFFF',
							fontSize: 16,
							fontWeight: '400',
							fontFamily: 'Sen-Bold'
						},
						headerTintColor: '#FFFFFF',
						headerLeft: () => {
							return <Ionicons onPress={() => navigation.goBack()} name='chevron-back' size={24} color='#FFFFFF' />;
						}
					})}
					name='AddCard'
					component={Pages.AddCard}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default ModalStack;
