import * as React from 'react';
import * as Pages from '../pages';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type ModalStackParamList = {
	Basket: undefined;
	Payment: undefined;
	AddCard: undefined;
	ProfileInformation: undefined;
	EditProfile: undefined;
	AddressInformation: undefined;
	EditAddress: undefined;
};

const Stack = createNativeStackNavigator<ModalStackParamList>();

const ModalStack: React.FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Group
				screenOptions={({ navigation }) => ({
					headerStyle: {
						backgroundColor: '#181C2E'
					},
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
				})}>
				<Stack.Screen
					options={{
						headerTitle: 'Sepetim'
					}}
					name='Basket'
					component={Pages.Basket}
				/>
				<Stack.Screen
					options={{
						headerTitle: 'Ödeme Yap'
					}}
					name='Payment'
					component={Pages.Payment}
				/>
				<Stack.Screen
					options={{
						headerTitle: 'Kart Ekle'
					}}
					name='AddCard'
					component={Pages.AddCard}
				/>
				<Stack.Screen
					options={{
						headerTitle: 'Profil Bilgilerim'
					}}
					name='ProfileInformation'
					component={Pages.ProfileInformation}
				/>
				<Stack.Screen
					options={{
						headerTitle: 'Profilini Düzenle'
					}}
					name='EditProfile'
					component={Pages.EditProfile}
				/>
				<Stack.Screen
					options={{
						headerTitle: 'Adres Bilgilerim'
					}}
					name='AddressInformation'
					component={Pages.AddressInformation}
				/>
				<Stack.Screen
					options={{
						headerTitle: 'Adresini düzenle'
					}}
					name='EditAddress'
					component={Pages.EditAddress}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default ModalStack;
