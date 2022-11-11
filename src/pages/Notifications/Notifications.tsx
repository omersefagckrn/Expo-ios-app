import * as React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Animated, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NoticationsProps } from '../../@types/pages/Notifications/Notifications';
import { styles } from './style';

const notificatinData = [
	{
		id: 1,
		title: 'Notification Assistant',
		minute: '10 min ago',
		description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
	},
	{
		id: 2,
		title: 'Notification Assistant',
		minute: '20 min ago',
		description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit st qui dolorem ipsum quia dolor st qui dolorem ipsum quia dolor'
	},
	{
		id: 3,
		title: 'Notification Assistant',
		minute: '30 min ago',
		description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,'
	}
];

const Notifications: React.FC<NoticationsProps<'Notifications'>> = () => {
	const [refreshing, setRefreshing] = React.useState<boolean>(false);

	const wait = (timeout: number) => {
		return new Promise((resolve) => setTimeout(resolve, timeout));
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(1000).then(() => setRefreshing(false));
	}, []);

	const renderLeftActions = (progress: any, dragX: any) => {
		const scale = dragX.interpolate({
			inputRange: [0, 100],
			outputRange: [0, 1]
		});
		return (
			<TouchableOpacity style={styles.animatedLeftBar}>
				<Animated.Text
					style={[
						styles.anitmatedText,
						{
							transform: [{ translateX: scale }]
						}
					]}>
					Sil
				</Animated.Text>
			</TouchableOpacity>
		);
	};

	return (
		<>
			<SafeAreaView style={styles.container}>
				<ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
					<View style={styles.tabBar}>
						<Text style={styles.tabBarText}>Bildirimler</Text>
					</View>

					{notificatinData.map((item, index) => (
						<Swipeable overshootLeft key={item.id} renderLeftActions={renderLeftActions}>
							<View
								style={[
									styles.notificationContainer,
									{
										borderBottomWidth: index === notificatinData.length - 1 ? 0 : 1,
										paddingBottom: index === notificatinData.length - 1 ? 0 : 20
									}
								]}>
								<Ionicons name='ios-notifications' size={24} color='#32343E' />
								<View style={styles.notificationTextContainer}>
									<Text style={styles.notificationTitle}>{item.title}</Text>
									<Text style={styles.notificationTime}>{item.minute}</Text>
									<Text style={styles.notificationDescription}>{item.description}</Text>
								</View>
							</View>
						</Swipeable>
					))}
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

export default Notifications;
