import * as React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { ModalPanelProps } from '../../../@types/pages/Modal/Panel/Panel';
import { styles } from './styles';

const Panel: React.FC<ModalPanelProps> = ({ onPress, children, title }) => {
	return (
		<>
			<SafeAreaView style={{ flex: 0 }} />
			<View style={styles.container}>
				<ScrollView pagingEnabled showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
					<View style={styles.route}>
						<TouchableOpacity style={styles.routeChevron} onPress={onPress}>
							<Ionicons name='chevron-back' size={20} color='#FFFFFF' />
						</TouchableOpacity>
						<Text style={styles.routeSubTitle}>{title}</Text>
					</View>
					{children}
				</ScrollView>
			</View>
		</>
	);
};

export default Panel;
