import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    backgroundImage: {
      height: windowHeight,
      width: '100%',
      position: 'absolute',
      top: 0,
      zIndex: -100,
    },
    home: {
      height: windowHeight,
    },
    homeBottom: {
      position: 'absolute',
      bottom: -100,
      height: 300,
    },
    postTitle1: {
      color: '#fff',
      fontSize: 20,
      marginLeft: 65,
    },
    postTitle2: {
      color: '#fff',
      fontSize: 20,
      marginLeft: 65,
    },
    signInContainer: {
      borderWidth: 1,
      borderColor: '#fff',
      borderStyle: 'solid',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 100,
      width: '35%',
      alignItems: 'center',
    },
    signIn: {
      color: '#fff',
    },
    signUpContainer: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#fff',
      borderStyle: 'solid',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 100,
      backgroundColor: '#fff',
      width: '50%',
      justifyContent: 'center',
    },
    signUp: {
      color: 'purple',
    },
    decide: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      width: windowWidth,
      gap: 10,
    },
    flagCircular: {
      width: 20,
      height: 20,
    },
    languageButton: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      zIndex: 100,
      width: 60,
      position: 'absolute',
      right: 0,
      top: 20,
      height: 30,
      alignItems: 'center',
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      paddingLeft: 10,
    },
    languageOption: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
      height: '50%',
      gap: 10,
    },
    langOptText: {
      fontSize: 18,
    },
    languageBackground: {
      backgroundColor: '#000',
      opacity: 0.3,
      height: windowHeight,
      width: windowWidth,
      zIndex: 500,
      position: 'absolute',
      display: 'none',
    },
    languageList: {
      backgroundColor: '#fff',
      zIndex: 1000,
      position: 'absolute',
      right: 10,
      top: 10,
      width: 250,
      height: 80,
      borderRadius: 30,
      overflow: 'hidden',
      display: 'none',
    },
    languageListBGGrey: {
      backgroundColor: 'silver',
    },
    languageButtonChevron: {
      transform: 'translateY(-8px)',
      fontSize: 25,
    },
    displayFlex: {
      display: 'flex',
    }
  });

  
  export default styles;