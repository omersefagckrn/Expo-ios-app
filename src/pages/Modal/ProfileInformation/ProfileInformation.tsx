import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { ProfileInformationProps } from '../../../@types/pages/Modal/ProfileInformation/ProfileInformation';
import { styles } from './styles';

const ProfileInformation: React.FC<ProfileInformationProps<'ProfileInformation'>> = ({ navigation, route }) => {
	const Menu = ({ title, subTitle, icon }: { title: string | undefined; subTitle: string | undefined; icon: string | undefined }) => {
		return (
			<View style={styles.infoContainer}>
				<View style={styles.iconContainer}>
					{/* @ts-ignore */}
					<Image style={styles.menuIcon} resizeMode='contain' source={icon} style={styles.menuIcon} />
				</View>
				<View style={styles.infoInnerContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subTitle}>{subTitle}</Text>
				</View>
			</View>
		);
	};
	return (
		<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
			<View style={styles.editProfileContainer}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('EditProfile');
					}}
					style={styles.editProfile}>
					{/* @ts-ignore */}
					<Image style={styles.editProfileMenuIcon} resizeMode='contain' source={require('../../../assets/icons/Profile/EditProfile.png')} />
				</TouchableOpacity>
			</View>

			<View style={styles.container}>
				<Menu icon={require('../../../assets/icons/Profile/ProfileInformation.png')} title='Full Name' subTitle='Ömer Sefa Güçkıran' />
				<Menu icon={require('../../../assets/icons/Profile/Email.png')} title='Email' subTitle='omergckrnx@gmail.com' />
				<Menu icon={require('../../../assets/icons/Profile/Phone.png')} title='Telefon Numarası' subTitle='507-845-5183' />
			</View>
		</ScrollView>
	);
};

export default ProfileInformation;
