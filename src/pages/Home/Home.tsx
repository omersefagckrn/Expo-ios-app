import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';

import type { HomeProps } from '../../@types/pages';

import { Input, Products } from '../../components';
import { styles } from './style';

const data: Array<{ id: number; title: string }> = [
	{
		id: 1,
		title: 'Tesbih'
	},
	{
		id: 2,
		title: 'Beyaz ürünler'
	},
	{
		id: 3,
		title: 'Siyah ürünler'
	},
	{
		id: 4,
		title: 'Kırmızı ürünler'
	}
];

const Home: React.FC<HomeProps<'Home'>> = ({ navigation, route }) => {
	const [search, setSearch] = React.useState<string>('');
	return (
		<>
			<SafeAreaView />

			<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headertText}>
						<Text style={styles.headerTitle}>Ömer Sefa Güçkıran</Text>
						<Text style={styles.headerSubTitle}>Home</Text>
					</View>
					<TouchableOpacity
						onPress={() => {
							navigation?.navigate('Modal', {
								screen: 'Basket'
							});
						}}>
						<Image style={styles.cardImage} source={require('../../assets/icons/Cart.png')} />
					</TouchableOpacity>
				</View>
				<View style={styles.hey}>
					<Text style={styles.heyLeftText}>
						Selam Ömer Sefa, <Text style={styles.heyRightText}>İyi günler!</Text>
					</Text>
				</View>
				{/* tab -> main */}
				<View style={styles.search}>
					<Input leftIcon={<TextInput.Icon color='#A0A5BA' icon='magnify' />} placeholder='Ürün ara yada kategori gir' value={search} onChangeText={(text) => setSearch(text)} />
				</View>

				<View style={styles.category}>
					<View style={styles.categoryText}>
						<Text style={styles.categoryTitle}>kategoriler</Text>
						<TouchableOpacity style={styles.seeAll}>
							<Text style={styles.categorySubTitle}>Hepsini gör</Text>
							<Image style={styles.categoryImage} source={require('../../assets/icons/Rightarrow.png')} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.categoryContainer}>
					<ScrollView horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryList}>
						{data?.map((item) => (
							<TouchableOpacity key={item.id} style={styles.listItemContainer}>
								<Text style={styles.listItem} key={item.id}>
									{item.title}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
				<View style={styles.category}>
					<View style={styles.categoryText}>
						<Text style={styles.categoryTitle}>Ürünler</Text>
						<TouchableOpacity style={styles.seeAll}>
							<Text style={styles.categorySubTitle}>Hepsini gör</Text>
							<Image style={styles.categoryImage} source={require('../../assets/icons/Rightarrow.png')} />
						</TouchableOpacity>
					</View>
				</View>
				<Products />
			</ScrollView>
		</>
	);
};

export default Home;
