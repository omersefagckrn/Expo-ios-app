import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	tabContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomLeftRadius: 24,
		borderBottomRightRadius: 24
	},
	bottomContainer: {
		flex: 3,
		backgroundColor: colors.white,
		borderTopRightRadius: 24,
		borderTopLeftRadius: 24,
		padding: 24
	},
	title: {
		color: colors.white,
		fontFamily: 'Sen-Bold',
		fontSize: 30,
		fontWeight: '700'
	},
	subTitle: {
		color: colors.white,
		fontFamily: 'Sen-Regular',
		fontSize: 16,
		fontWeight: '400',
		lineHeight: 26
	}
});
