import React, { useState } from "react";
import { Text,Vibration,TextInput,View,TouchableOpacity,Pressable,Keyboard} from "react-native";
import ResultImc from "./ResultImc/";
import styles from './styles';
 
export default function Form(props) {
  
const [height, setHeight] = React.useState(null);
const [weight, setWeight] = React.useState(null);
const [messageImc, setMessageImc] = useState("preencha o peso e altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");
const [errorMessenger, setErroMessenger] = useState(null);

function verificationImc(){
  if(imc == null){
    Vibration.vibrate();
    setErroMessenger("campo obrigatório*")
  }
}

function imcCalculator(){
  let heightFormat = height.replace(",",".")
  return setImc((weight / (heightFormat * heightFormat)).toFixed(2));
}

function validationImc() {
  if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual:")
      setTextButton("Calcular Novamente")
      setErroMessenger(null)
      return
    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style = {styles.form}>
        <Text style = {styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessenger}>{errorMessenger}</Text>
        <TextInput
          style = {styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
        <Text style = {styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessenger}>{errorMessenger}</Text>
        <TextInput
          style = {styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 86.300"
          keyboardType="numeric"
        />
        <TouchableOpacity 
        style={styles.buttonCalculator}
        onPress = {() =>{
          validationImc()
          }}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
      </View>
      <ResultImc messageResultIMc={messageImc} resultImc={imc} />
    </Pressable>
  )
}
