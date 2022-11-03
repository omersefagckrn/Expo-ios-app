import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
	inputContainer: {
		marginBottom: 24
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
	forgotpasswordLabel: {
		fontFamily: 'Sen-Regular',
		fontSize: 14,
		color: colors.orange,
		textDecorationLine: 'underline'
	},
	haveAnAccount: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 28
	},
	haveAnAccountLabel: {
		color: colors.purple
	},
	signUpLabel: {
		marginHorizontal: 4,
		color: colors.orange,
		fontWeight: '700',
		fontFamily: 'Sen-Bold',
		textDecorationLine: 'underline'
	},
	OrContainer: {
		alignItems: 'center',
		marginTop: 12
	},
	Or: {
		fontSize: 16,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		marginVertical: 15,
		color: colors.purple
	},
	IconContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		width: 62,
		height: 62,
		marginHorizontal: 10
	}
});
