import { StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

export const styles = StyleSheet.create({
	input: {
		borderRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		backgroundColor: colors.white_2,
		fontSize: 14,
		color: colors.primary,
		lineHeight: 17,
		fontFamily: 'Sen-Regular'
	},
	container: {
		flex: 1
	}
});
