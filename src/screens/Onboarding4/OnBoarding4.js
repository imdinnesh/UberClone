import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Car4 from "@/assets/Car4.png"
import PrimaryButton from "@/components/PrimaryButton.jsx"
import SecondartButton from "@/components/SecondartButton.jsx"

const OnBoarding4 = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={Car4} style={{ width: 334.5, height: 223 }} />
        <Text style={styles.heading}>Get Started!</Text>
      </View>
      <View style={styles.container2} >
        <PrimaryButton title="Create Account" onPress={() => console.log("Create Account")} />
        <SecondartButton title="Sign In" onPress={() => console.log("Login")} />
      </View>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#263238'
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  container2:{
    alignItems: 'center',
    flex:1,
    backgroundColor: '#263238'
  }

});

export default OnBoarding4;
