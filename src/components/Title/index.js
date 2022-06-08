import React from "react";
import { View, Text } from "react-native";
import styles from './styles.js';
 
export default function Title() {
  return (
    <View style = {styles.boxTitle} >
      <Text style={styles.textTitle}>ONEBITHEALTH</Text>
    </View>
  );
}