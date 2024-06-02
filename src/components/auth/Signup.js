import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    Alert.alert('Register Button Pressed', `Full Name: ${fullName}\nEmail: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}\nDate of Birth: ${dateOfBirth}`);
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign-In Pressed');
  };

  const handleFacebookSignIn = () => {
    Alert.alert('Facebook Sign-In Pressed');
  };

  const handleTwitterSignIn = () => {
    Alert.alert('Twitter Sign-In Pressed');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/vector-ilustration.jpg')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Register</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity onPress={handleGoogleSignIn} style={[styles.socialButton, styles.googleButton]}>
            <Image source={require('../../../assets/googleIcon.jpg')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFacebookSignIn} style={[styles.socialButton, styles.facebookButton]}>
            <Image source={require('../../../assets/facebookIcon.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTwitterSignIn} style={[styles.socialButton, styles.twitterButton]}>
            <Image source={require('../../../assets/twitterIcon.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>Or, register with email ...</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email ID"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="calendar-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />
        </View>
        <Button
          mode="contained"
          onPress={handleRegister}
          style={styles.registerButton}
          labelStyle={styles.registerButtonText}
        >
          Register
        </Button>
        <View style={styles.loginContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginTouchable}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('2%'),
  },
  image: {
    width: wp('70%'),
    height: hp('30%'),
  },
  title: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: hp('2%'),
    paddingHorizontal: wp('2%'),
  },
  icon: {
    opacity: 0.5,
    marginRight: wp('2%'),
  },
  input: {
    flex: 1,
    paddingVertical: hp('1%'),
  },
  registerButton: {
    backgroundColor: '#AD41AE',
    padding: hp('1.2%'),
    marginBottom: hp('4%'),
    marginTop: hp('1.5%'),
    borderRadius: wp('2.5%'),
  },
  registerButtonText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginBottom: hp('3%'),
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: hp('2%'),
  },
  socialButton: {
    width: wp('21%'),
    height: wp('12%'),
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D3CDD1',
  },
  googleButton: {
    backgroundColor: '#fff',
  },
  facebookButton: {
    backgroundColor: '#fff',
  },
  twitterButton: {
    backgroundColor: '#fff',
  },
  socialIcon: {
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: wp('3%'),
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  loginTouchable: {
    flexDirection: 'row',
  },
  loginText: {
    color: 'black',
  },
  loginLink: {
    color: '#AD41AE',
  },
});

export default Register;
