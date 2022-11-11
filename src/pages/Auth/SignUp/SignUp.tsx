import * as React from 'react';
import * as Yup from 'yup';
import { Formik, FormikErrors, FormikHandlers, FormikHelpers } from 'formik';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Input, Button } from '../../../components';
import AuthPanel from '../Panel/Panel';

import { styles } from './style';

const validationSchema = Yup.object().shape({
	fullName: Yup.string().required('Lütfen tam adınızı giriniz.'),
	email: Yup.string().required('Lütfen email giriniz.').email('Geçersiz Email.'),
	password: Yup.string().required('Lütfen şifre giriniz.'),
	reTypePassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Şifre eşleşmelidir.')
		.required('Lütfen şifre tekrar giriniz.')
});

interface Values {
	fullName: string;
	email: string;
	password: string;
	reTypePassword: string;
}

const Login: React.FC = () => {
	const onSubmit = (values: Values) => {
		console.log(values);
	};
	return (
		<>
			<AuthPanel title='Kayıt Ol' subTitle='Başlamak için kaydolun'>
				<Formik
					validateOnBlur={false}
					validateOnChange={false}
					initialValues={{ fullName: '', email: '', password: '', reTypePassword: '' }}
					validationSchema={validationSchema}
					onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
						resetForm();
						onSubmit(values);
					}}>
					{({ handleSubmit, handleChange, values, errors }: { handleSubmit: () => void; handleChange: FormikHandlers['handleChange']; values: Values; errors: FormikErrors<Values> }) => (
						<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>İsim</Text>
								<Input placeholder='İsim' onChangeText={handleChange('fullName')} value={values.fullName} />
								{errors.fullName && <Text style={styles.error}>{errors?.fullName}</Text>}
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>E-posta</Text>
								<Input placeholder='E-posta' onChangeText={handleChange('email')} value={values.email} />
								{errors.email && <Text style={styles.error}>{errors?.email}</Text>}
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Şifre</Text>
								<Input secureTextEntry placeholder='Şifre' onChangeText={handleChange('password')} value={values.password} />
								{errors.password && <Text style={styles.error}>{errors?.password}</Text>}
							</View>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Şifre tekrar</Text>
								<Input secureTextEntry placeholder='Şifre tekrar' onChangeText={handleChange('reTypePassword')} value={values.reTypePassword} />
								{errors.reTypePassword && <Text style={styles.error}>{errors?.reTypePassword}</Text>}
							</View>

							<Button title='Kayıt Ol' onPress={handleSubmit} />

							<View style={styles.haveAnAccount}>
								<Text style={styles.haveAnAccountLabel}>Hesabın mı var?</Text>
								<TouchableOpacity>
									<Text style={styles.signInLabel}>Giriş Yap</Text>
								</TouchableOpacity>
							</View>
						</ScrollView>
					)}
				</Formik>
			</AuthPanel>
		</>
	);
};

export default Login;
