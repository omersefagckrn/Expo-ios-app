import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '../../../navigation/RootStack';
import { AuthStackParamList } from '../../../navigation/AuthStack';

type MainNavigationProp<RouteName extends keyof AuthStackParamList> = CompositeNavigationProp<NativeStackNavigationProp<AuthStackParamList, RouteName>, NativeStackNavigationProp<RootStackParamList>>;

export type LoginProps<RouteName extends keyof AuthStackParamList> = {
	navigation: CompositeNavigationProp<NativeStackNavigationProp<AuthStackParamList, RouteName>, MainNavigationProp<RouteName>>;
	route: RouteProp<AuthStackParamList, RouteName>;
};
