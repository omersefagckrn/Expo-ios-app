import * as React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import { Animated, Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';

import type { PaymentProps } from '../../../@types/pages/Modal/Payment/Payment';

import { styles } from './style';
import { Button } from '../../../components';

import * as Haptics from 'expo-haptics';

const cardData = [
	{
		id: 1,
		cardNumber: '1234',
		cardOwnerName: 'Chanel'
	},
	{
		id: 2,
		cardNumber: '5678',
		cardOwnerName: 'Louis vuitton'
	}
];

const Payment: React.FC<PaymentProps<'Payment'>> = ({ navigation, route }) => {
	const [selectedCard, setSelectedCard] = React.useState<any>(null);

	const isCard = false;
	return (
		<>
			<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
				<View style={styles.tabContainer}>
					<View style={styles.totalPriceContainer}>
						<Text style={styles.totalPrice}>Toplam ödeme:</Text>
						<Text style={styles.totalPayment}>₺96</Text>
					</View>

					{isCard ? (
						<>
							<View style={styles.noCardContainer}>
								{/* @ts-ignore */}
								<Image source={require('../../../assets/NoCard.png')} style={styles.noCardImage} />
								<Text style={styles.noCardTitle}>Henüz kartını eklemedin!</Text>
								<Text style={styles.noCardSubTitle}>Kartınızı ekledikten sonra kartlarınız burada görünecektir.</Text>
							</View>
							<Button style={styles.addCardButton} title='Yeni Kart Ekle' onPress={() => console.log('ekle')} />
						</>
					) : (
						<>
							<Text style={styles.paymentMethodTitle}>Ödeme yöntemi seçin</Text>
							{cardData.map((card) => (
								<TouchableOpacity
									key={card.id}
									onPress={() => {
										if (selectedCard === null) setSelectedCard(card);
										else setSelectedCard(null);
										Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
									}}>
									<Animated.View
										style={[
											styles.cardContainer,
											{
												borderWidth: selectedCard?.id === card.id ? 1 : 0,
												borderColor: '#181C2E'
											}
										]}>
										<View>
											<Text style={styles.cardOwnerName}>{card.cardOwnerName}</Text>
											<View style={styles.cardIbanContainer}>
												{/* @ts-ignore */}
												<Image source={require('../../../assets/Mastercard.png')} style={styles.masterCardImage} />
												<Text style={styles.ibanText}>************* {card.cardNumber}</Text>
											</View>
										</View>
										<TouchableOpacity>
											<Ionicons name='trash' size={24} color='#32343E' />
										</TouchableOpacity>
									</Animated.View>
								</TouchableOpacity>
							))}
							<Button
								style={styles.addCardButton}
								title='Yeni kart ekle'
								onPress={() => {
									navigation.navigate('AddCard');
								}}
							/>
							<Button
								style={styles.finishPayment}
								title='Ödemeyi bitir'
								onPress={() => {
									if (selectedCard === null) {
										Toast.show({
											type: 'error',
											text1: 'Dikkat!',
											text2: 'Bir ödeme yöntemi seçmediniz!'
										});
									} else {
										Toast.show({
											type: 'success',
											text1: 'Başarılı!',
											text2: `${selectedCard.cardNumber} numaralı kart ile ödeme yapılıyor.`
										});
									}
								}}
							/>
						</>
					)}
				</View>
			</ScrollView>
		</>
	);
};

export default Payment;
