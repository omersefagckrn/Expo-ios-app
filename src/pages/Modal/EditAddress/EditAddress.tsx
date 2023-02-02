import * as React from 'react';
import * as Yup from 'yup';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { Formik, FormikErrors, FormikHandlers, FormikHelpers } from 'formik';
import type { EditAddressProps } from '../../../@types/pages/Modal/EditAddress/EditAddress';

import { Button, Input } from '../../../components';
import { styles } from '../EditAddress/style';

interface Values {
	address: string;
	street: string;
	neighbourhood: string;
	city: string;
	title: string;
}

const validationSchema = Yup.object().shape({
	address: Yup.string().required('Lütfen adres giriniz.'),
	street: Yup.string().required('Lütfen sokak giriniz.'),
	neighbourhood: Yup.string().required('Lütfen mahalle giriniz.'),
	city: Yup.string().required('Lütfen şehir giriniz.'),
	title: Yup.string().required('Lütfen başlık giriniz.')
});

const EditAddress: React.FC<EditAddressProps<'EditAddress'>> = () => {
	const onSubmit = (values: Values) => {
		console.log(values);
	};
	return (
		<KeyboardAvoidingView style={styles.keyboardView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled keyboardVerticalOffset={100}>
			<Formik
				validateOnBlur={false}
				validateOnChange={false}
				initialValues={{
					address: '',
					street: '',
					neighbourhood: '',
					city: '',
					title: ''
				}}
				validationSchema={validationSchema}
				onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
					resetForm();
					onSubmit(values);
				}}
			>
				{({ handleSubmit, handleChange, values, errors }: { handleSubmit: () => void; handleChange: FormikHandlers['handleChange']; values: Values; errors: FormikErrors<Values> }) => (
					<ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
						<View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Adres</Text>
								<Input placeholder='Adres | No/Daire' onChangeText={handleChange('address')} value={values.address} />
								{errors.address && <Text style={styles.error}>{errors?.address} </Text>}
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Sokak</Text>
								<Input placeholder='Sokak' onChangeText={handleChange('street')} value={values.street} />
								{errors.street && <Text style={styles.error}>{errors?.street} </Text>}
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Mahalle</Text>
								<Input placeholder='Mahalle' onChangeText={handleChange('neighbourhood')} value={values.neighbourhood} />
								{errors.neighbourhood && <Text style={styles.error}>{errors?.neighbourhood} </Text>}
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Şehir</Text>
								<Input maxLenght={10} placeholder='Şehir' onChangeText={handleChange('city')} value={values.city} />
								{errors.city && <Text style={styles.error}>{errors?.city} </Text>}
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>Adres başlığı</Text>
								<Input maxLenght={10} placeholder='Adres başlığı' onChangeText={handleChange('title')} value={values.title} />
								{errors.title && <Text style={styles.error}>{errors?.title} </Text>}
							</View>

							<Button title='Adresi güncelle' onPress={handleSubmit} />
						</View>
					</ScrollView>
				)}
			</Formik>
		</KeyboardAvoidingView>
	);
};

export default EditAddress;
