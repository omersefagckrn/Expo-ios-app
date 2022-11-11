import { StyleProp, ViewStyle } from 'react-native';

export type InputProps = {
	value: string;
	onChangeText: (text: string) => void;
	secureTextEntry?: boolean;
	disabled?: boolean;
	placeholder?: string;
	icon?: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	leftIcon?: React.ReactNode;
	render?: (props: any) => React.ReactNode;
	maxLenght?: number;
};
