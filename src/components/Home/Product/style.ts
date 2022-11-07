import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		marginBottom: 20
	},
	image: {
		width: '100%',
		height: 200,
		borderRadius: 15
	},
	itemInner: {
		flexDirection: 'column',
		marginVertical: 8
	},
	productName: {
		color: colors.blue,
		fontFamily: 'Sen-Regular',
		fontSize: 20,
		fontWeight: '400'
	},
	productCategory: {
		color: colors.fadePurple,
		fontFamily: 'Sen-Regular',
		fontSize: 14,
		fontWeight: '400'
	},
	iconContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 8
	},
	icon: {
		marginRight: 8
	},
	starText: {
		color: colors.primary,
		fontFamily: 'Sen-Bold',
		fontWeight: '700',
		fontSize: 16
	},
	productRating: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	deliveryIcon: {
		marginRight: 8,
		width: 20,
		height: 20
	},
	deliveryText: {
		color: colors.primary,
		fontFamily: 'Sen-Regular'
	}
});
