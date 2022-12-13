import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
	addressMenu: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		backgroundColor: '#F6F8FA',
		padding: 15,
		borderRadius: 16
	},
	iconContainer: {
		backgroundColor: colors.white,
		borderRadius: 100,
		padding: 14,
		justifyContent: 'center'
	},
	menuIcon: {
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: colors.white,
		width: 18,
		height: 18
	},
	innerContainer: {
		flex: 1,
		marginLeft: 10
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 8
	},
	editAddressContainer: {
		flexDirection: 'row'
	},
	addressName: {
		color: colors.primary,
		fontSize: 14,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		textTransform: 'uppercase'
	},
	addressIcon: {
		width: 15,
		height: 15
	},
	address: {
		color: colors.primary,
		fontSize: 14,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		opacity: 0.5
	},
	tab: {
		marginTop: 20,
		marginHorizontal: 24
	}
});
