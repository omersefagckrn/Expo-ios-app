import * as React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import type { PaymentProps } from '../../../@types/pages/Modal/Payment/Payment';

import { styles } from './styles';
import { Button } from '../../../components';

const Payment: React.FC<PaymentProps<'Payment'>> = ({ navigation, route }) => {
	const isCard = false;
	return (
		<>
			<SafeAreaView style={{ flex: 0 }} />
			<View style={styles.container}>
				<ScrollView pagingEnabled showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
					<View style={styles.route}>
						<TouchableOpacity style={styles.routeChevron} onPress={() => navigation.goBack()}>
							<Ionicons name='chevron-back' size={24} color='#FFFFFF' />
						</TouchableOpacity>
						<Text style={styles.routeSubTitle}>Ödeme</Text>
					</View>
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
							<View style={styles.cardContainer}>
								<View>
									<Text style={styles.cardOwnerName}>Ömer Sefa Güçkıran</Text>
									<View style={styles.cardIbanContainer}>
										{/* @ts-ignore */}
										<Image source={require('../../../assets/Mastercard.png')} style={styles.masterCardImage} />
										<Text style={styles.ibanText}>************* 4428</Text>
									</View>
								</View>
								<TouchableOpacity>
									<Ionicons name='trash' size={24} color='#32343E' />
								</TouchableOpacity>
							</View>
							<Button style={styles.addCardButton} title='Yeni Kart Ekle' onPress={() => console.log('ekle')} />
							<Button style={styles.finishPayment} title='Ödemeyi bitir' onPress={() => console.log('ödeme bitir')} />
						</>
					)}
				</ScrollView>
			</View>
		</>
	);
};

export default Payment;
