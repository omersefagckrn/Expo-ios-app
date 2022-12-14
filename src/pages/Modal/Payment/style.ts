import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
	tabContainer: {
		marginHorizontal: 20
	},
	noCardContainer: {
		padding: 30,
		backgroundColor: colors.fadeOrange,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
		borderRadius: 10
	},
	noCardImage: {
		width: 400,
		height: 150
	},
	noCardTitle: {
		fontWeight: '700',
		fontFamily: 'Sen-Bold',
		fontSize: 16
	},
	noCardSubTitle: {
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		fontSize: 14,
		color: '#2D2D2D',
		textAlign: 'center',
		marginTop: 10
	},
	paymentMethodTitle: {
		fontWeight: '700',
		fontFamily: 'Sen-Bold',
		fontSize: 16,
		marginVertical: 10
	},
	addCardButton: {
		marginVertical: 10
	},
	finishPayment: {
		backgroundColor: colors.blue
	},
	totalPriceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 15
	},
	totalTitle: {
		color: colors.fadePurple,
		fontSize: 14,
		fontFamily: 'Sen-Regular',
		fontWeight: '400',
		textTransform: 'uppercase'
	},
	totalPrice: {
		fontSize: 14,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		color: colors.fadePurple,
		textTransform: 'uppercase'
	},
	totalPayment: {
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		fontSize: 20,
		textTransform: 'capitalize',
		color: colors.blue,
		marginLeft: 10
	},

	changeAddress: {
		fontSize: 16,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		color: colors.blue,
		textDecorationLine: 'underline',
		marginVertical: 10
	},
	cardContainer: {
		padding: 18,
		backgroundColor: colors.fadeOrange,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 8
	},
	cardOwnerName: {
		color: colors.blue,
		fontSize: 16,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		marginVertical: 6
	},
	cardIbanContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	masterCardImage: {
		width: 28,
		height: 18,
		marginRight: 6
	},
	ibanText: {
		color: colors.blue,
		fontSize: 16,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		textAlign: 'center'
	},
	crossImage: {
		height: 15,
		width: 15
	},
	errorText: {
		color: colors.red,
		fontSize: 14,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		marginVertical: 10
	}
});
