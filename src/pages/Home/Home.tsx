import * as React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import type { HomeProps } from '../../@types/pages';

import { Products } from '../../components';
import { styles } from './style';

const data = [
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
				<TouchableOpacity
					onPress={() => {
						console.log('search');
					}}
					style={styles.search}>
					<Text style={styles.searchText}>Ürün aramak yada kategori bulmak için tıkla</Text>
					<Ionicons name='search' size={20} color='#FFFFFF' />
				</TouchableOpacity>

				<View style={styles.categoryText}>
					<Text style={styles.categoryTitle}>Kategoriler</Text>
					<TouchableOpacity style={styles.seeAll}>
						<Text style={styles.categorySubTitle}>Hepsini gör</Text>
						<Image style={styles.categoryImage} source={require('../../assets/icons/Rightarrow.png')} />
					</TouchableOpacity>
				</View>

				<View style={styles.categoryContainer}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryList}>
						{data.map((item) => (
							<TouchableOpacity key={item.id} style={styles.listItemContainer}>
								<Text style={styles.listItem}>{item.title}</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
				<View style={styles.categoryText}>
					<Text style={styles.categoryTitle}>Ürünler</Text>
					<TouchableOpacity style={styles.seeAll}>
						<Text style={styles.categorySubTitle}>Hepsini gör</Text>
						<Image style={styles.categoryImage} source={require('../../assets/icons/Rightarrow.png')} />
					</TouchableOpacity>
				</View>
				<Products />
			</ScrollView>
		</>
	);
};

export default Home;
