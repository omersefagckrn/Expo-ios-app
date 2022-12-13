import type { RouteProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { ModalStackParamList } from '../../../../navigation/ModalStack';

export type EditProfileProps<RouteName extends keyof ModalStackParamList> = {
	navigation: BottomTabNavigationProp<ModalStackParamList, RouteName>;
	route: RouteProp<ModalStackParamList, RouteName>;
};
