import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';

type RootStackParamList = {
  Home: undefined;
  LogIn: undefined;
  NewHere: undefined;
};

type NewHereNavigationProp = NativeStackNavigationProp<RootStackParamList, 'NewHere'>;

interface NewHereProps {
  navigation: NewHereNavigationProp;
}

const NewHere: React.FC<NewHereProps> = ({ navigation }) => {
  return (
    <View style={styles.newHere}>
      <View>
        <View>
          
        </View>
        <View></View>
      </View>
    </View>
  );
}

export default NewHere;