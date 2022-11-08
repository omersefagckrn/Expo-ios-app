import * as React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';

import type { PaymentProps } from '../../../@types/pages/Modal/Payment/Payment';

import Panel from '../Panel/Panel';

import { styles } from './styles';
import { Button } from '../../../components';

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
	const animatedScale = React.useRef(new Animated.Value(0)).current;

	React.useEffect(() => {
		animatedScale.setValue(1);
	}, []);

	const handleCardSelect = () => {
		animatedScale.setValue(0.9);
		Animated.spring(animatedScale, {
			toValue: 1,
			bounciness: 2,
			speed: 10,
			useNativeDriver: true
		}).start();
	};

	const isCard = false;
	return (
		<>
			<Panel title='Ödemeyi tamamla' onPress={() => navigation.goBack()}>
				<>
					<View style={styles.totalPriceContainer}>
						<Text style={styles.totalPrice}>Toplam ödeme:</Text>
						<Text style={styles.totalPayment}>96₺</Text>
					</View>

					{isCard ? (
						<>
							<View style={styles.noCardContainer}>
								{/* @ts-ignore */}
								<Image source={require('../../../assets/NoCard.png')} style={styles.noCardImage} />
								<Text style={styles.noCardTitle}>Henüz kartını eklemedin!</Text>
								<Text style={styles.noCardSubTitle}>Kartınızı ekledikten sonra kartlarınız burada bulunacaktır.</Text>
							</View>
							<Button style={styles.addCardButton} title='Yeni Kart Ekle' onPress={() => console.log('ekle')} />
						</>
					) : (
						<>
							<Text style={styles.paymentMethodTitle}>Ödeme yöntemi seçin.</Text>
							{cardData.map((card) => (
								<TouchableOpacity
									key={card.id}
									onPress={() => {
										handleCardSelect();
										if (selectedCard === null) setSelectedCard(card);
										else setSelectedCard(null);
									}}>
									<Animated.View
										style={[
											styles.cardContainer,
											{
												transform: [
													{
														scale: animatedScale
													}
												],
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
							<Button style={styles.addCardButton} title='Yeni kart ekle' onPress={() => console.log('ekle')} />
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
				</>
			</Panel>
		</>
	);
};

export default Payment;
