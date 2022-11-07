import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { BottomTabParamList } from '../../../navigation/MainStack';

export type NoticationsProps<RouteName extends keyof BottomTabParamList> = {
	navigation: NativeStackNavigationProp<BottomTabParamList, RouteName>;
	route: RouteProp<BottomTabParamList, RouteName>;
};
