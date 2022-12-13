import * as React from 'react';
import * as Yup from 'yup';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { Formik, FormikErrors, FormikHandlers, FormikHelpers } from 'formik';
import type { EditProfileProps } from '../../../@types/pages/Modal/EditProfile/EditProfile';

import { Button, Input } from '../../../components';
import { styles } from './style';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

interface Values {
	name: string;
	surname: string;
	email: string;
	phone: string;
}

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Lütfen adınızı giriniz.'),
	surname: Yup.string().required('Lütfen soyadınızı giriniz.'),
	email: Yup.string().required('Lütfen email giriniz.').email('Geçersiz Email.'),
	phone: Yup.string().required('Lütfen telefon numaranızı giriniz.').matches(phoneRegExp, 'Geçersiz telefon numarası.')
});

const EditProfile: React.FC<EditProfileProps<'EditProfile'>> = () => {
	const onSubmit = (values: Values) => {
		console.log(values);
	};
	return (
		<KeyboardAvoidingView style={styles.keyboardView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled keyboardVerticalOffset={100}>
			<Formik
				validateOnBlur={false}
				validateOnChange={false}
				initialValues={{
					name: '',
					surname: '',
					email: '',
					phone: ''
				}}
				validationSchema={validationSchema}
				onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
					resetForm();
					onSubmit(values);
				}}>
				{({ handleSubmit, handleChange, values, errors }: { handleSubmit: () => void; handleChange: FormikHandlers['handleChange']; values: Values; errors: FormikErrors<Values> }) => (
					<ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
						<View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Ad</Text>
								<Input placeholder='Ad' onChangeText={handleChange('name')} value={values.name} />
								{errors.name && <Text style={styles.error}>{errors?.name} </Text>}
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Soyad</Text>
								<Input placeholder='Soyad' onChangeText={handleChange('surname')} value={values.surname} />
								{errors.surname && <Text style={styles.error}>{errors?.surname} </Text>}
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>E-posta</Text>
								<Input placeholder='E-posta' onChangeText={handleChange('email')} value={values.email} />
								{errors.email && <Text style={styles.error}>{errors?.email} </Text>}
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Telefon Numarası</Text>
								<Input maxLenght={10} placeholder='532*******' onChangeText={handleChange('phone')} value={values.phone} />
								{errors.phone && <Text style={styles.error}>{errors?.phone} </Text>}
							</View>

							<Button title='Bilgilerimi güncelle' onPress={handleSubmit} />
						</View>
					</ScrollView>
				)}
			</Formik>
		</KeyboardAvoidingView>
	);
};

export default EditProfile;
