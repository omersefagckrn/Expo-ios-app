import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/color';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 24
	},
	route: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 24
	},
	routeChevron: {
		backgroundColor: colors.blue,
		padding: 8,
		/* @ts-ignore */
		borderRadius: '100%'
	},
	routeSubTitle: {
		color: colors.blue,
		fontSize: 24,
		fontWeight: '400',
		fontFamily: 'Sen-Regular',
		marginLeft: 20
	}
});
