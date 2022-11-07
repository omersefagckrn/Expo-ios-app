import type { RouteProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ModalStackParamList } from '../../../../navigation/ModalStack';

export type BasketProps<RouteName extends keyof ModalStackParamList> = {
	navigation: BottomTabNavigationProp<ModalStackParamList, RouteName>;
	route: RouteProp<ModalStackParamList, RouteName>;
};
