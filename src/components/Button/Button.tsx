import * as React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { ButtonProps } from '../../@types/components/Button';

import { styles } from './style';

const Button: React.FC<ButtonProps> = ({ onPress, title, loading, style }) => {
	return (
		<TouchableOpacity style={[styles.button, style]} disabled={loading} onPress={onPress}>
			{loading ? <ActivityIndicator color='#FFFFFF' /> : <Text style={styles.buttonText}>{title}</Text>}
		</TouchableOpacity>
	);
};

export default Button;
