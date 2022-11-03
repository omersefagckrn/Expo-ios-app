import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
	inputContainer: {
		marginBottom: 20
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
	},
	forgotpasswordContainer: {
		alignSelf: 'flex-end',
		marginBottom: 31
	},
	haveAnAccount: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 24
	},
	haveAnAccountLabel: {
		color: colors.purple
	},
	signInLabel: {
		marginHorizontal: 10,
		color: colors.orange,
		fontWeight: '700',
		fontFamily: 'Sen-Bold'
	}
});
