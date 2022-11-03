import { StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

export const styles = StyleSheet.create({
	dot: {
		width: 8,
		height: 8,
		marginHorizontal: 3,
		// @ts-ignore
		borderRadius: '100%'
	},
	done: {
		width: 30,
		height: 30,
		marginHorizontal: 10
	},
	title: {
		color: colors.primary,
		fontFamily: 'Sen-ExtraBold',
		fontSize: 24,
		fontWeight: '800'
	},
	subtitle: {
		color: colors.purple,
		fontFamily: 'Sen-Regular',
		lineHeight: 24,
		fontSize: 16
	}
});
