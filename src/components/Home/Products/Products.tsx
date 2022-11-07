import * as React from 'react';
import { View } from 'react-native';

import Product from '../Product/Product';

import { styles } from './style';

const ProductsItem = [
	{
		id: 1,
		name: 'Rose garden restaurant',
		description: 'Ürün yüksek kalitedir.',
		price: 100,
		category: 'Burger - Chiken - Riche - Wings',
		star: 2.1
	},
	{
		id: 2,
		name: 'Ekmek',
		description: 'Ekmek çok sıcaktır.',
		price: 200,
		category: 'Unlu Mamüller',
		star: 3.4
	},
	{
		id: 3,
		name: 'Ketçap',
		description: 'Ketçap çok salçalıdır.',
		price: 300,
		category: 'Soslar',
		star: 4.6
	},
	{
		id: 4,
		name: 'Tost Ekmeği',
		description: 'Bununla tost yapabilirsiniz.',
		price: 400,
		category: 'Unlu Mamüller',
		star: 4.1
	},
	{
		id: 5,
		name: 'Kola',
		description: 'Kola çok tatlıdır.',
		price: 500,
		category: 'İçecekler',
		star: 3.4
	}
];

const Products: React.FC = () => {
	return (
		<View style={styles.container}>
			{ProductsItem?.map((item) => (
				<Product key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} category={item.category} star={item.star} />
			))}
		</View>
	);
};

export default Products;
