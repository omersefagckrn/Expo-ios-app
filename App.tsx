import * as React from 'react';
import * as Font from 'expo-font';

import Toast from 'react-native-toast-message';

import RootStack from './src/navigation/RootStack';

const App: React.FC = () => {
	const [fontsLoaded] = Font.useFonts({
		'Sen-Regular': require('./src/theme/fonts/Sen-Regular.ttf'),
		'Sen-Bold': require('./src/theme/fonts/Sen-Bold.ttf'),
		'Sen-ExtraBold': require('./src/theme/fonts/Sen-ExtraBold.ttf')
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<RootStack />
			<Toast position='top' autoHide visibilityTime={2000} />
		</>
	);
};

export default App;
