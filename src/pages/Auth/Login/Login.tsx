import * as React from 'react';
import * as Yup from 'yup';
import { Formik, FormikErrors, FormikHandlers, FormikHelpers } from 'formik';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

import { Input, Button } from '../../../components';
import AuthPanel from '../Panel/Panel';

import { styles } from './style';

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Geçersiz Email.').required('Lütfen email giriniz.'),
	password: Yup.string().required('Lütfen şifre giriniz.')
});

interface Values {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const onSubmit = (values: Values) => {
		console.log(values);
	};
	return (
		<AuthPanel title='Giriş yap' subTitle='Mevcut hesabınızda oturum açın'>
			<Formik
				validateOnBlur={false}
				validateOnChange={false}
				initialValues={{ email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
					resetForm();
					onSubmit(values);
				}}>
				{({ handleSubmit, handleChange, values, errors }: { handleSubmit: () => void; handleChange: FormikHandlers['handleChange']; values: Values; errors: FormikErrors<Values> }) => (
					<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
						<View style={styles.inputContainer}>
							<Text style={styles.label}>E-posta</Text>
							<Input placeholder='E-posta' onChangeText={handleChange('email')} value={values.email} />
							{errors.email && <Text style={styles.error}>{errors?.email} </Text>}
						</View>
						<View style={styles.inputContainer}>
							<Text style={styles.label}>Şifre</Text>
							<Input icon='eye' placeholder='Şifre' secureTextEntry onChangeText={handleChange('password')} value={values.password} />
							{errors.password && <Text style={styles.error}>{errors?.password} </Text>}
						</View>
						<TouchableOpacity style={styles.forgotpasswordContainer}>
							<Text style={styles.forgotpasswordLabel}>Şifreni mi unuttun?</Text>
						</TouchableOpacity>

						<Button title='Giriş Yap' onPress={handleSubmit} />

						<View style={styles.haveAnAccount}>
							<Text style={styles.haveAnAccountLabel}>Hesabınız yok mu?</Text>
							<TouchableOpacity>
								<Text style={styles.signUpLabel}>Kayıt Olun</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.OrContainer}>
							<Text style={styles.Or}>Ya da</Text>
						</View>

						<View style={styles.IconContainer}>
							<TouchableOpacity>
								<Image style={styles.icon} source={require('../../../assets/icons/Facebook.png')} />
							</TouchableOpacity>
							<TouchableOpacity>
								<Image style={styles.icon} source={require('../../../assets/icons/Twitter.png')} />
							</TouchableOpacity>
						</View>
					</ScrollView>
				)}
			</Formik>
		</AuthPanel>
	);
};

export default Login;
