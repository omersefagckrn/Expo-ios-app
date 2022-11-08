import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
	total: {
		backgroundColor: colors.blue,
		padding: 24,
		borderRadius: 24,
		marginVertical: 15
	},
	totalTitle: {
		color: colors.fadePurple,
		fontSize: 14,
		fontFamily: 'Sen-Regular',
		fontWeight: '400',
		textTransform: 'uppercase'
	},
	totalPriceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 15
	},
	totalPayment: {
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		fontSize: 30,
		textTransform: 'capitalize',
		color: colors.white,
		marginLeft: 10
	},

	totalPrice: {
		fontSize: 14,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		color: colors.fadePurple,
		textTransform: 'uppercase'
	},
	address: {
		backgroundColor: colors.white_2,
		padding: 10,
		borderRadius: 10,
		marginVertical: 10
	},
	addressText: {
		fontSize: 16,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		color: colors.primary
	},
	basketContainer: {
		flexDirection: 'row',
		marginBottom: 30
	},
	imageContainer: {
		marginHorizontal: 10
	},
	image: {
		/* @ts-ignore */
		borderRadius: '30%',
		width: 136,
		height: 117
	},
	innerContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '50%'
	},
	title: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	name: {
		fontFamily: 'Sen-Regular',
		fontSize: 18,
		fontWeight: '400',
		textTransform: 'capitalize',
		maxWidth: 100
	},
	crossImage: {
		width: 27,
		height: 27
	},
	price: {
		fontWeight: '700',
		fontFamily: 'Sen-Bold',
		fontSize: 20,
		textTransform: 'capitalize',
		color: colors.blue,
		marginVertical: 8
	},
	countContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	circleIcon: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 5
	},
	increase: {
		padding: 3
	},
	decrease: {
		padding: 3
	},
	itemCount: {
		marginHorizontal: 10,
		fontFamily: 'Sen-Bold',
		fontSize: 16,
		textTransform: 'capitalize'
	}
});
