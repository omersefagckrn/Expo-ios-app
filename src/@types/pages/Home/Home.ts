import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type HomeStackParamList = {
	Home: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;

export type HomeProps = {
	navigation?: HomeScreenNavigationProp;
	route?: HomeScreenRouteProp;
};
