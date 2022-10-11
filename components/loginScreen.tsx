import { Formik } from "formik";
import * as yup from 'yup';
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";

let LoginValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter Valide Email').required('Email Address is required'),
  password: yup.string().min(8, ({ min }) => `Password must be atleast ${min} characters`).required('Password is required'),
  cpassword: yup.string().required('Password is required').oneOf([yup.ref('password')], 'Password doesnt match')
});

LoginValidationSchema.oneOf

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In Form</Text>
      <Formik
        initialValues={{ email: '', password: '', cpassword: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={LoginValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, touched, isValid, errors, values }) => (
          <View>
            <Text>
              Enter your email
            </Text>
            <TextInput style={styles.textinput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email} />
            {(errors.email && touched.email) &&
              <Text style={styles.error}>{errors.email}</Text>
            }
            <Text>
              Enter your password
            </Text>
            <TextInput style={styles.textinput}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password} />
            {(errors.password && touched.password) &&
              <Text style={styles.error}>{errors.password}</Text>
            }
            <Text>
              Confirm your password
            </Text>
            <TextInput style={styles.textinput}
              onChangeText={handleChange('cpassword')}
              onBlur={handleBlur('cpassword')}
              value={values.cpassword} />
            {(errors.cpassword && touched.cpassword) &&
              <Text style={styles.error}>{errors.cpassword}</Text>
            }
            <TouchableOpacity style={styles.button}
              onPress={(alert)}>
              <Text style={{ alignSelf: 'center', padding: 10 }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 70,
  },
  textinput: {
    borderWidth: 1,
    height: 40,
    marginTop: 30,
    padding: 5
  },
  button: {
    backgroundColor: 'orange',
    height: 40,
    width: "50%",
    alignSelf: 'center',
    marginTop: 40
  },
  error: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  }

})