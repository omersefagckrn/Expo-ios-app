import * as React from 'react';
import * as Font from 'expo-font';

import HomeStackNavigator from './src/navigation/HomeStack';

const App: React.FC = () => {
	const [fontsLoaded] = Font.useFonts({
		'Sen-Regular': require('./src/theme/fonts/Sen-Regular.ttf'),
		'Sen-Bold': require('./src/theme/fonts/Sen-Bold.ttf'),
		'Sen-ExtraBold': require('./src/theme/fonts/Sen-ExtraBold.ttf')
	});

	if (!fontsLoaded) {
		return null;
	}

	return <HomeStackNavigator />;
};

export default App;