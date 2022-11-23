import { StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

export const styles = StyleSheet.create({
	tabBar: {
		marginVertical: 24,
		marginHorizontal: 24
	},
	tabBarText: {
		color: colors.orange,
		fontFamily: 'Sen-Bold',
		fontSize: 17,
		fontWeight: '700'
	},
	userInfoContainer: {
		flexDirection: 'row',
		marginHorizontal: 24,
		marginBottom: 26
	},
	userImage: {
		width: 100,
		height: 100,
		/* @ts-ignore */
		borderRadius: '100%'
	},
	userTextContainer: {
		justifyContent: 'center',
		marginLeft: 32
	},
	userNameText: {
		color: colors.primary,
		fontFamily: 'Sen-Bold',
		fontSize: 20,
		fontWeight: '700',
		textTransform: 'capitalize'
	},
	userEmailText: {
		color: colors.fadePurple,
		fontFamily: 'Sen-Regular',
		fontSize: 14,
		fontWeight: '400',
		marginTop: 8
	},
	menuContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 14,
		backgroundColor: '#F6F8FA',
		borderRadius: 16,
		marginBottom: 8
	},
	menuInnerContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginLeft: 24
	},
	menuIcon: {
		width: 16,
		height: 16
	},
	menuTitle: {
		fontFamily: 'Sen-Regular',
		fontSize: 16,
		fontWeight: '400',
		color: colors.primary
	},
	iconContainer: {
		padding: 14,
		backgroundColor: colors.white,
		/* @ts-ignore */
		borderRadius: '100%',
		alignItems: 'center'
	}
});
