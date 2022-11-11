import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
	keyboardView: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	scrollContent: {
		marginHorizontal: 20
	},
	cardHolderContainer: {
		marginVertical: 15
	},
	cardNumberContainer: {
		marginBottom: 10
	},
	expireDateContainer: {
		marginBottom: 10,
		width: '60%'
	},
	cvcContainer: {
		width: '38%'
	},
	expireCvcContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	error: {
		color: colors.red,
		fontsize: 10,
		marginHorizontal: 8,
		marginVertical: 8
	},
	label: {
		fontFamily: 'Sen-Regular',
		fontSize: 13,
		fontWeight: '400',
		lineHeight: 16,
		marginBottom: 8,
		color: colors.primary
	}
});
