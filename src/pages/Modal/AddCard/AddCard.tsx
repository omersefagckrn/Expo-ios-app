import * as React from 'react';
import * as Yup from 'yup';
import { Formik, FormikErrors, FormikHandlers, FormikHelpers } from 'formik';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import type { AddCardProps } from '../../../@types/pages/Modal/AddCard/AddCard';

import { styles } from './style';
import { Button, Input } from '../../../components';

const validationSchema = Yup.object().shape({
	cardHolderName: Yup.string().required('Kart sahibi adını giriniz.'),
	cardNumber: Yup.string()
		.required('Kart numarasını giriniz.')
		.matches(/^[0-9]+$/, 'Kart numarası sadece rakamlardan oluşmalıdır.')
		.min(16, 'Kart numarası 16 haneli olmalıdır.'),
	expirationDate: Yup.string()
		.required('Son kullanma tarihini giriniz.')
		.min(5, 'Son kullanma tarihi 5 haneli olmalıdır.')
		.matches(/([0-9]{2})\/([0-9]{2})/, 'Yanlış tarih girdiniz. Örneğin: aa/yy'),
	cvc: Yup.string()
		.required('Kartın cvc kodunu giriniz.')
		.min(3, 'Cvc')
		.matches(/^[0-9]+$/, 'Cvc sadece rakamlardan oluşmalıdır.')
});

interface Values {
	cardHolderName: string;
	cardNumber: string;
	expirationDate: string;
	cvc: string;
}

const AddCard: React.FC<AddCardProps<'AddCard'>> = ({ navigation, route }) => {
	const onSubmit = (values: Values) => {
		console.log(values);
	};
	return (
		<KeyboardAvoidingView style={styles.keyboardView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled keyboardVerticalOffset={100}>
			<Formik
				validateOnBlur={false}
				validateOnChange={false}
				initialValues={{
					cardHolderName: '',
					cardNumber: '',
					expirationDate: '',
					cvc: ''
				}}
				validationSchema={validationSchema}
				onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
					resetForm();
					onSubmit(values);
				}}>
				{({ handleSubmit, handleChange, values, errors }: { handleSubmit: () => void; handleChange: FormikHandlers['handleChange']; values: Values; errors: FormikErrors<Values> }) => (
					<ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
						<View>
							<View style={styles.cardHolderContainer}>
								<Text style={styles.label}>KART SAHİBİ</Text>
								<Input placeholder='Kart sahibi' onChangeText={handleChange('cardHolderName')} value={values.cardHolderName} />
								{errors.cardHolderName && <Text style={styles.error}>{errors?.cardHolderName} </Text>}
							</View>
							<View style={styles.cardNumberContainer}>
								<Text style={styles.label}>KART NUMARASI</Text>
								<Input maxLenght={16} placeholder='**** **** **** ****' onChangeText={handleChange('cardNumber')} value={values.cardNumber} />
								{errors.cardNumber && <Text style={styles.error}>{errors?.cardNumber} </Text>}
							</View>

							<View style={styles.expireCvcContainer}>
								<View style={styles.expireDateContainer}>
									<Text style={styles.label}>SON KULLANMA TARİHİ</Text>
									<Input maxLenght={5} placeholder='aa/yy' onChangeText={handleChange('expirationDate')} value={values.expirationDate} />
									{errors.expirationDate && <Text style={styles.error}>{errors?.expirationDate} </Text>}
								</View>
								<View style={styles.cvcContainer}>
									<Text style={styles.label}>CVC</Text>
									<Input maxLenght={3} placeholder='***' onChangeText={handleChange('cvc')} value={values.cvc} />
									{errors.cvc && <Text style={styles.error}>{errors?.cvc} </Text>}
								</View>
							</View>

							<Button title='Ödeme yöntemini ekle' onPress={handleSubmit} />
						</View>
					</ScrollView>
				)}
			</Formik>
		</KeyboardAvoidingView>
	);
};

export default AddCard;
