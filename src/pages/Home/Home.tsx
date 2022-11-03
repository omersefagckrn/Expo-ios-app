import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import type { HomeProps } from '../../@types/pages';

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
	return (
		<TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home</Text>
		</TouchableOpacity>
	);
};

export default Home;
