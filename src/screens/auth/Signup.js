import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import SigupScreen from '../../components/auth/Signup';
const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SigupScreen />
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
