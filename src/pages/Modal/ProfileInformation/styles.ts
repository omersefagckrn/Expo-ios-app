import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginHorizontal: 24,
		borderRadius: 16,
		backgroundColor: '#F6F8FA'
	},
	infoContainer: {
		padding: 20,
		flex: 1,
		flexDirection: 'row'
	},
	iconContainer: {
		padding: 14,
		backgroundColor: colors.white,
		/* @ts-ignore */
		borderRadius: '100%'
	},
	menuIcon: {
		width: 18,
		height: 18
	},
	title: {
		color: colors.primary,
		fontFamily: 'Sen-Regular',
		fontSize: 14,
		fontWeight: '400',
		textTransform: 'uppercase'
	},
	subTitle: {
		fontFamily: 'Sen-Regular',
		fontSize: 14,
		fontWeight: '400',
		color: '#6B6E82'
	},
	infoInnerContainer: {
		flex: 1,
		marginLeft: 16,
		justifyContent: 'center'
	},
	editProfileContainer: {
		alignItems: 'center'
	},
	editProfile: {
		alignItems: 'center',
		marginVertical: 14,
		padding: 14,
		backgroundColor: colors.orange,
		/* @ts-ignore */
		borderRadius: '100%'
	},
	editProfileMenuIcon: {
		width: 20,
		height: 20
	}
});
