import { StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

export const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.orange,
		alignItems: 'center',
		paddingVertical: 18,
		borderRadius: 12
	},
	buttonText: {
		color: colors.white,
		fontFamily: 'Sen-Bold',
		fontSize: 14
	}
});
