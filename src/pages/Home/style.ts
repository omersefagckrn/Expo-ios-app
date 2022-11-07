import { StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

export const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 24
	},
	headertText: {
		flexDirection: 'column'
	},
	headerTitle: {
		color: colors.orange_2,
		fontWeight: '700',
		fontSize: 12,
		textTransform: 'uppercase',
		fontFamily: 'Sen-Bold',
		marginVertical: 3
	},
	headerSubTitle: {
		color: colors.gray
	},
	cardImage: {
		width: 45,
		height: 45
	},
	hey: {
		marginVertical: 24,
		marginHorizontal: 24
	},
	heyLeftText: {
		fontWeight: '400',
		fontSize: 16,
		textTransform: 'capitalize',
		fontFamily: 'Sen-Regular'
	},
	heyRightText: {
		color: colors.primary,
		fontWeight: '400',
		fontSize: 16,
		textTransform: 'capitalize',
		fontFamily: 'Sen-Bold'
	},
	search: {
		marginHorizontal: 24
	},
	category: {
		flexDirection: 'column',
		marginVertical: 24,
		marginHorizontal: 24
	},
	categoryText: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	categoryTitle: {
		color: colors.primary,
		fontWeight: '400',
		fontSize: 20,
		textTransform: 'capitalize',
		fontFamily: 'Sen-Regular'
	},
	categorySubTitle: {
		fontFamily: 'Sen-Regular',
		marginHorizontal: 10
	},
	seeAll: {
		flexDirection: 'row',
		alignItems: 'center',
		color: colors.fadePurple
	},
	categoryImage: {
		width: 5,
		height: 10
	},
	categoryContainer: {
		marginBottom: 24,
		marginLeft: 24
	},
	categoryList: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	listItemContainer: {
		shadowColor: '#96969A',
		shadowOffset: {
			width: 4,
			height: 4
		},
		borderRadius: 50,
		padding: 5,
		marginRight: 10,
		backgroundColor: colors.primary
	},
	listItem: {
		fontFamily: 'Sen-Bold',
		color: colors.white,
		fontSize: 14,
		fontWeight: '700',
		marginHorizontal: 10
	}
});
