import { StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 24
	},
	tabBar: {
		marginVertical: 24
	},
	tabBarText: {
		color: colors.orange,
		fontFamily: 'Sen-Bold',
		fontSize: 17,
		fontWeight: '700'
	},
	dataContainer: {},
	notificationContainer: {
		flexDirection: 'row',
		borderBottomColor: colors.gray,
		marginTop: 10
	},
	notificationImage: {
		width: 54,
		height: 54,
		/* @ts-ignore */
		borderRadius: '100%'
	},
	notificationTextContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		marginLeft: 10
	},
	notificationTitle: {
		fontFamily: 'Sen-Bold',
		fontSize: 17,
		fontWeight: '700',
		color: colors.primary
	},
	notificationTime: {
		fontWeight: '400',
		fontSize: 10,
		fontFamily: 'Sen-Regular',
		color: colors.gray_3,
		marginVertical: 3
	},
	notificationDescription: {
		flex: 1,
		fontFamily: 'Sen-Regular',
		fontSize: 13,
		fontWeight: '400',
		color: colors.gray
	},
	anitmatedText: {
		color: colors.orange,
		fontFamily: 'Sen-Bold'
	},
	animatedLeftBar: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.primary,
		width: 50
	}
});
