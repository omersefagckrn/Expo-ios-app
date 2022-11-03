import * as React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-paper';

import { InputProps } from '../../@types/components/Input';

import { styles } from './style';

const Input: React.FC<InputProps> = ({ onChangeText, value, secureTextEntry, disabled, placeholder, icon, style }) => {
	const [isSecure, setIsSecure] = React.useState<boolean | undefined>(secureTextEntry);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<TextInput
				selectionColor='#32343E'
				textContentType='oneTimeCode'
				activeUnderlineColor='transparent'
				underlineColor='transparent'
				placeholderTextColor='#A0A5BA'
				right={secureTextEntry ? <TextInput.Icon color='#32343E' onPress={() => setIsSecure((prev) => !prev)} icon='eye' /> : icon}
				style={[styles.input, style]}
				placeholder={placeholder}
				disabled={disabled}
				onChangeText={onChangeText}
				value={value}
				secureTextEntry={isSecure && secureTextEntry}
			/>
		</TouchableWithoutFeedback>
	);
};

export default Input;
