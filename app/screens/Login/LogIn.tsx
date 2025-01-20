import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import RootStackParamList from '@/types/RootStackParamList';

type LogInNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LogIn'>;

interface LogInProps {
  navigation: LogInNavigationProp;
}

const LogIn: React.FC<LogInProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Log In</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()}/>
    </View>
  );
}

export default LogIn;