// svgr ./uk-flag-circular.svg --out-dir ./react-components/icons

import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./styles";
import { useContext } from "react";
import { Context } from "@/components/ContextProvider";
import CircularUKFlag from '../../../assets/svg/react-components/UkFlagCircular';
import CircularGermanyFlag from '../../../assets/svg/react-components/GermanyFlagCircular';
// import SvgUri from 'react-native-svg-uri';

type RootStackParamList = {
  Home: undefined;
  LogIn: undefined;
  NewHere: undefined;
};

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeNavigationProp;
}

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  const { globalState, dispatch } = useContext(Context);
  const [ showLanguageList, setShowLanguageList ] = useState<Boolean>(false);

  const germanOnPress = (): void => {
    dispatch({ type: 'set-lang-to-german' });
    setShowLanguageList(false);
  };

  const englishOnPress = (): void => {
    dispatch({ type: 'set-lang-to-english' });
    setShowLanguageList(false);
  };

  useEffect(() => {
    console.log('globalState', globalState);
  }, [globalState]);

  return (
    <View style={styles.home}>

      <Image style={styles.backgroundImage}
        source={require('../../../assets/images/backgroundImage.jpg')}
      ></Image>

      <TouchableWithoutFeedback
        onPress={() => setShowLanguageList(false)}
      >
        <View
          style={[styles.languageBackground, showLanguageList && styles.displayFlex]}
        ></View>
      </TouchableWithoutFeedback>

        <View style={[styles.languageList, showLanguageList && styles.displayFlex]}>
          <TouchableOpacity
            style={[styles.languageOption, globalState.language === 'german' && styles.languageListBGGrey]}
            onPressIn={germanOnPress}
          >
            <CircularGermanyFlag
              width='20'
              height='20'
            />
            <Text style={styles.langOptText}>Deutsch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.languageOption, globalState.language === 'english' && styles.languageListBGGrey]}
            onPress={englishOnPress}
          >
            <CircularUKFlag
              width='20'
              height='20'
            />

            <Text style={styles.langOptText}>English</Text>
          </TouchableOpacity>
        </View>


      <TouchableOpacity style={styles.languageButton} onPress={() => setShowLanguageList(true)}>
          <Text style={styles.languageButtonChevron}>&#8964;</Text>
          <Text>{ globalState.language === 'german' ? '🇩🇪' : '🇬🇧' }</Text>
      </TouchableOpacity>

      <View style={styles.homeBottom}>
        <Text style={styles.postTitle1}>
          { 
            globalState.language === 'german' ? 'Deine persönliche Steuer-App:'
              : 'Your personal tax app' // standard english
          }

        </Text>
        <Text style={styles.postTitle2}>
          {
            globalState.language === 'german' ? 'einfach, schnell und verständlich.'
              : 'simple, fast and comprehensible'
          }
        </Text>

        <View style={styles.decide}>
          <TouchableOpacity style={styles.signInContainer} onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.signIn}>{globalState.language === 'german' ? 'Anmelden' : 'Login'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.signUpContainer} onPress={() => navigation.navigate('NewHere')}>
            <Text style={styles.signUp}>
              {
                globalState.language === 'german' ? 'Ich bin neu hier'
                  : 'I\'m new here'
              }
            </Text>
            <Text style={styles.signUp}>&#128075;</Text>
          </TouchableOpacity>
        </View>

      </View>
      
    </View>
  );
}

export default Home;

