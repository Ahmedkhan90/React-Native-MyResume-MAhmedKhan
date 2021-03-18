/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React , {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';
import Home from './Home'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  

  return (

    <ScrollView>
        <Button title="Button"  />
<View style={styles.back}>
      {/* <Button title="Click Me" style={styles.btn}/> */}
      <View style={styles.container}>
<View><Text></Text></View>
        <Image style={styles.image} source={require('./mypic.jpg')}  />
        {/* <Text>Hello World</Text> */}
        <StatusBar style="auto" />
      </View>

      <View>
        
<Text style={styles.heading}>MUHAMMAD AHMED KHAN</Text>
        
       <Text style={styles.text}>CONTACT #  03112030422</Text>
       <Text style={styles.text}>E-mail: Mohammad.ahmedkhan@icloud.com</Text>
        <Text>KEY WORDS: Looking For a sultable position of sharia Adviser / Assistants of sharia advviser / Teacher
        position with a pertigious and reputable establishment where
        I will have a 'hands on' role.</Text>
      </View>

      <View>
        <Text style={styles.heading}>PERSONAL INFORMATION</Text> 
        <Text  style={styles.text1}>Father's Name:       MUHAMMAD MIKAIL KHAN</Text>
        <Text style={styles.text1}> CNIC:                       42201-9557244-7</Text>
        <Text style={styles.text1}>Date Of Birth:         1-MAR-1991</Text>
        <Text style={styles.text1}>Religion:                   Islam</Text>
        <Text style={styles.text1}>Maritail Status:       Married</Text>
        <Text style={styles.text1}>Adress:                     H No. 5/1856 Shah Faisal Colony Block 5 Karachi</Text>
    </View>

        <View>
          <Text style={styles.heading}>PERSNOL SKILLS</Text>
          <Text style={styles.text1}>Ms Office</Text>
          <Text style={styles.text1}>Web And Mobile Hybride Application Development</Text>
          <Text style={styles.text1}>Front-End And Back-End Developer</Text>
          <Text style={styles.text1}>Graphic Desiner</Text>
          <Text style={styles.text1}>English Composer</Text>
          <Text style={styles.text1}>Urdu Composer</Text>
          <Text style={styles.text1}>Arabic Compoder</Text>
          <Text style={styles.text1}>Persion Composer</Text>
        </View>
        
        <View>
        
          <Text style={styles.heading}>ACADEMIC QULIFICATION</Text>
          <Text style={styles.text1}>MATRIC: IN SCIENCE FORM MATRIC BOARD KARACHI</Text>
          <Text style={styles.text1}>INTER: IN COMMERCE FORM INTER BOARD KARACHI</Text>
          <Text style={styles.text1}>BECHOLOUR: IN COMMERCE FROM UNIVERCITY OF KARACHI(CONTINUE)</Text>
          <Text style={styles.text1}>MASTER'S IN ARABIC AND ISLAMIAT FROM KARACHI UNIVERCITY</Text>
          <Text style={styles.text1}>MASTER'S EQULANCE FROM HEC(HEIGHER EDUCATION CENTER KARACHI) FOR ARABIC And ISLAMIAT</Text>
          <Text style={styles.text1}>MPHIL FROM KARACHI UNIVERCTY(CONTINUE)</Text>

          <Text style={styles.heading}>RELIGION QULIFICATION</Text>
          <Text style={styles.text1}>SHAHADAT UL AMMA IS EQULE TO MATRIC IN ARABIC And ISLAMIAT</Text>
          <Text style={styles.text1}>SHAHADAT UL KHASSA IS EQULE TO INTER IN ARABIC And ISLAMIAT</Text>
          <Text style={styles.text1}>SHAHADAT UL ALMIA IS EQULE TO BECHOLER IN ARABIC And ISLMIAT</Text>
          <Text style={styles.text1}>SHAHADAT UL AALMIA IS EQULE TO MASTER IN ARABIC And ISLAMIAT</Text>
          <Text style={styles.text1}>SHAHADAT UL TAKHASSUS FIL FIQH IS EQULE TO M.PHIL IN ARABIC ISLMIAT</Text>
          <Text style={styles.text1}>ADEEB ARABIC FORM MATRIC BOARD OF KARACHI</Text>
          <Text style={styles.text1}>ALIM ARABIC FROM MATRIC BOARD OF KARACHI</Text>
          <Text style={styles.text1}>FAZIL ARABIC FROM MATRIC BOARD OF KARACHI </Text>
          <Text style={styles.text1}>TAJVEED E QURAN FROM MADARSA MANZAR UL ISLAM</Text>
     </View>
       </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image:{
    width: 100,
    height: 100,
     borderRadius: 100,
      marginLeft: 10,
       marginTop: 50 
  },
  heading:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  // btn:{
  //   width:"5",
  //   color: `#ff0000`,
  // },
  text:{
    fontSize: 20,
    marginLeft:1,
    fontWeight:'bold'
  },
  text1:{
    fontSize:15,
    marginLeft:2,
    fontWeight:'bold',
  },
  back:{
    backgroundColor: 'white'
  }
});

export default App;
