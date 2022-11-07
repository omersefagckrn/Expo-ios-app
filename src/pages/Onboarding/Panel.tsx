import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Onboarding, { DoneButtonProps, DotProps } from 'react-native-onboarding-swiper';

// style
import { styles } from './style';
import { colors } from '../../theme/color';

const Panel: React.FC = () => {
	const backgroundColor = '#FFFFFF';
	return (
		<Onboarding
			showSkip={false}
			showNext={false}
			controlStatusBar={true}
			bottomBarHighlight={false}
			titleStyles={styles.title}
			bottomBarColor='#FFFFFF'
			subTitleStyles={styles.subtitle}
			DotComponent={(props: DotProps) => <View style={[styles.dot, { backgroundColor: props.selected ? colors.orange : colors.fadeOrange }]} />}
			DoneButtonComponent={(props: DoneButtonProps) => (
				<TouchableOpacity
					onPress={() => {
						console.log('go to home page.');
					}}>
					{/* @ts-ignore */}
					<Image style={styles.done} source={require('../../assets/icons/Check.png')} />
				</TouchableOpacity>
			)}
			pages={[
				{
					backgroundColor: backgroundColor,
					image: <Image source={require('../../assets/Onboarding.png')} />,
					title: 'All your favorites',
					subtitle: 'Get all your loved foods in one once place, you just place the orer we do the rest'
				},
				{
					backgroundColor: backgroundColor,
					image: <Image source={require('../../assets/Onboarding.png')} />,
					title: 'Order from choosen chef',
					subtitle: 'We choose the food you want from the chef you want, prepare it and deliver it as soon as possible.'
				},
				{
					backgroundColor: backgroundColor,
					image: <Image source={require('../../assets/Onboarding.png')} />,
					title: 'Free delivery offers',
					subtitle: 'We prepare food for you in the fastest order.'
				}
			]}
		/>
	);
};

export default Panel;
