import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { BottomTabParamList } from '../../../navigation/MainStack';
import { RootStackParamList } from '../../../navigation/RootStack';
import { ModalStackParamList } from '../../../navigation/ModalStack';

type MainNavigationProp = CompositeNavigationProp<NativeStackNavigationProp<ModalStackParamList>, NativeStackNavigationProp<RootStackParamList>>;

export type HomeProps<RouteName extends keyof BottomTabParamList> = {
	navigation: CompositeNavigationProp<BottomTabNavigationProp<BottomTabParamList, RouteName>, MainNavigationProp>;
	route: RouteProp<BottomTabParamList, RouteName>;
};
