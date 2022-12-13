import * as React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ProfileProps } from '../../@types/pages/Profile/Profile';

import { styles } from './style';

const Profile: React.FC<ProfileProps<'Profile'>> = ({ navigation, route }) => {
	const Menu = ({ icon, title, onPress }: { icon: string | undefined; title: string | undefined; onPress: () => void }) => {
		return (
			<TouchableOpacity style={styles.menuContainer} onPress={onPress}>
				<View style={styles.iconContainer}>
					{/* @ts-ignore */}
					<Image resizeMode='contain' source={icon} style={styles.menuIcon} />
				</View>
				<View style={styles.menuInnerContainer}>
					<Text style={styles.menuTitle}>{title}</Text>
					<Ionicons name='arrow-forward' size={16} color='#747783' />
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<>
			<SafeAreaView style={{ flex: 0 }} />
			<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
				<View style={styles.tabBar}>
					<Text style={styles.tabBarText}>Profil</Text>
				</View>
				<View style={styles.userInfoContainer}>
					{/* @ts-ignore */}
					<Image source={require('../../assets/Onboarding.png')} style={styles.userImage} />
					<View style={styles.userTextContainer}>
						<Text style={styles.userNameText}>Ömer Sefa Güçkıran</Text>
						<Text style={styles.userEmailText}>omergckrnx@gmail.com</Text>
					</View>
				</View>
				<View
					style={{
						marginHorizontal: 24
					}}>
					<Menu
						icon={require('../../assets/icons/Profile/ProfileInformation.png')}
						title='Profil Bilgilerim'
						onPress={() => {
							navigation.navigate('Modal', {
								screen: 'ProfileInformation'
							});
						}}
					/>
					<Menu icon={require('../../assets/icons/Profile/Favorites.png')} title='Favorilerim' onPress={() => {}} />
					<Menu
						icon={require('../../assets/icons/Profile/Address.png')}
						title='Adreslerim'
						onPress={() => {
							navigation.navigate('Modal', {
								screen: 'AddressInformation'
							});
						}}
					/>
					<Menu icon={require('../../assets/icons/Profile/PaymentMethods.png')} title='Ödeme yöntemlerim' onPress={() => {}} />
					<Menu icon={require('../../assets/icons/Profile/Logout.png')} title='Çıkış Yap' onPress={() => {}} />
				</View>
			</ScrollView>
		</>
	);
};

export default Profile;
