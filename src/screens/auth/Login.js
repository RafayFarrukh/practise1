import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import LoginScreen from '../../components/auth/Login';
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
