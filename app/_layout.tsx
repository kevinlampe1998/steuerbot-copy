import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home/Home';
import LogIn from './screens/Login/LogIn';
import NewHere from './screens/NewHere/NewHere';
import { ContextProvider } from '@/components/ContextProvider';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <ContextProvider>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="NewHere" component={NewHere} />
      </Stack.Navigator>
    </ContextProvider>
  );
}
