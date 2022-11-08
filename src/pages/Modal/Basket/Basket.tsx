import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import type { BasketProps } from '../../../@types/pages/Modal/Basket/Basket';

import { Button } from '../../../components';
import { styles } from './style';
import Panel from '../Panel/Panel';

const BasketData = [
	{
		id: 1,
		name: 'pizza calzone european',
		price: 100
	},
	{
		id: 2,
		name: 'pizza toast europea',
		price: 200
	},
	{
		id: 3,
		name: 'pizza toast europeane',
		price: 300
	},
	{
		id: 4,
		name: 'pizza toast europeane',
		price: 400
	},
	{
		id: 5,
		name: 'Ekmek arası kasar',
		price: 500
	}
];

const Basket: React.FC<BasketProps<'Basket'>> = ({ navigation, route }) => {
	return (
		<>
			<Panel
				title='Sepetim'
				onPress={() => {
					navigation.goBack();
				}}>
				<View style={styles.total}>
					<Text style={styles.totalTitle}>Teslimat adresi</Text>
					<View style={styles.address}>
						<Text style={styles.addressText}>Hürriyet Mah. Karacaoğlan Sk.</Text>
					</View>
					<View style={styles.totalPriceContainer}>
						<Text style={styles.totalPrice}>Toplam ödeme:</Text>
						<Text style={styles.totalPayment}>96₺</Text>
					</View>
					<Button title='Ödemeye geç' onPress={() => navigation.navigate('Payment')} />
				</View>

				<View>
					{BasketData?.map((item) => (
						<View key={item.id} style={styles.basketContainer}>
							<View style={styles.imageContainer}>
								{/* @ts-ignore */}
								<Image source={require('../../../assets/Onboarding.png')} style={styles.image} />
							</View>
							<View style={styles.innerContainer}>
								<View style={styles.title}>
									<Text style={styles.name}>{item.name.slice(0, 20) + '...'}</Text>
									<TouchableOpacity>
										<Ionicons name='close-circle' size={30} color='#181C2E' />
									</TouchableOpacity>
								</View>
								<Text style={styles.price}>{item.price}₺</Text>
								<View style={styles.countContainer}>
									<TouchableOpacity style={styles.circleIcon}>
										<Ionicons name='remove-circle' size={20} color='#181C2E' />
									</TouchableOpacity>
									<Text style={styles.itemCount}>6</Text>
									<TouchableOpacity style={styles.circleIcon}>
										<Ionicons name='add-circle' size={20} color='#181C2E' />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					))}
				</View>
			</Panel>
		</>
	);
};

export default Basket;
