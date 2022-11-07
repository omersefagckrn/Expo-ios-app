import * as React from 'react';
import { Image, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ProductProps } from '../../../@types/components/Product';

import { styles } from './style';

const Product: React.FC<ProductProps> = ({ id, category, description, name, price, star }) => {
	return (
		<View style={styles.container}>
			<Image source={require('../../../assets/Onboarding.png')} style={styles.image} />
			<View style={styles.itemInner}>
				<Text style={styles.productName}>{name}</Text>
				<Text style={styles.productCategory}>{category}</Text>
				<View style={styles.productRating}>
					<View style={styles.iconContainer}>
						<Ionicons style={styles.icon} name='star' size={20} color='#FF7622' />
						<Text style={styles.starText}>{star}</Text>
					</View>
					<View
						style={[
							styles.iconContainer,
							{
								marginLeft: 10
							}
						]}>
						<Image resizeMode='contain' source={require('../../../assets/icons/Delivery.png')} style={styles.deliveryIcon} />
						<Text style={styles.deliveryText}>Free</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Product;
