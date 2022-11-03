import { StyleProp, ViewStyle } from 'react-native';

export type ButtonProps = {
	onPress: () => void;
	title: string;
	loading?: boolean;
	style?: StyleProp<ViewStyle>;
};
