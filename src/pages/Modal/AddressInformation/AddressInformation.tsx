import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AddressInformationProps } from '../../../@types/pages/Modal/AddressInformation/AddressInformation';

import { styles } from './style';

const address = [
	{
		id: 1,
		title: 'Home',
		address: 'Kadıköy, İstanbul Hürriyet Mahallesi, Karacaoğlan Sk. No.134'
	},
	{
		id: 2,
		title: 'Work',
		address: 'Kadıköy, İstanbul Leyla Mahallesi, Elti Sk. No.138'
	}
];

const AddressInformation: React.FC<AddressInformationProps<'AddressInformation'>> = ({ navigation, route }) => {
	const AddressMenu = ({ title, address }: { title: string | undefined; address: string | undefined }) => {
		return (
			<View style={styles.addressMenu}>
				<View style={styles.iconContainer}>
					{/* @ts-ignore */}
					<Image style={styles.menuIcon} resizeMode='contain' source={require('../../../assets/icons/Profile/WorkAddress.png')} style={styles.menuIcon} />
				</View>
				<View style={styles.innerContainer}>
					<View style={styles.titleContainer}>
						<Text style={styles.addressName}>{title}</Text>
						<View style={styles.editAddressContainer}>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('EditAddress');
								}}>
								{/* @ts-ignore */}
								<Image style={styles.addressIcon} resizeMode='contain' source={require('../../../assets/icons/Profile/EditAddress.png')} />
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									style={[
										/* @ts-ignore */
										styles.addressIcon,
										{
											marginLeft: 10
										}
									]}
									resizeMode='contain'
									source={require('../../../assets/icons/Profile/DeleteAddress.png')}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<Text style={styles.address}>{address}</Text>
				</View>
			</View>
		);
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
			<View style={styles.tab}>
				{address.map((item) => (
					<AddressMenu key={item.id} title={item.title} address={item.address} />
				))}
			</View>
		</ScrollView>
	);
};

export default AddressInformation;
