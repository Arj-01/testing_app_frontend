import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { StyleSheet } from 'react-native'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Discover your own startup</Header>
      <Paragraph>
        wdef eefefeef efvefv efc4tgp4 ojoi wejc oei  efcio33rij edcoke croi244 ree 
      </Paragraph>
      
  

      <Button
        title = "button1"
        mode="contained" 
        onPress={() => navigation.navigate('Login')}
  
     />
    
    <Button
        button = "button2"
        mode="outlined"
        onPress={() => navigation.navigate('Signup')}
      
      >
       
        Sign Up

    </Button>
    
    </Background>
  )
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     flex: 1,
//   }
// });

