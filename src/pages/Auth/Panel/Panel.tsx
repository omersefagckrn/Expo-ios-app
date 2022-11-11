import * as React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, View } from 'react-native';

import type { AuthPanel } from '../../../@types/pages';

import { styles } from './style';

const Panel: React.FC<AuthPanel> = ({ title, subTitle, children }) => {
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.tabContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>{subTitle}</Text>
			</SafeAreaView>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.bottomContainer}>
				{children}
			</KeyboardAvoidingView>
		</View>
	);
};

export default Panel;
