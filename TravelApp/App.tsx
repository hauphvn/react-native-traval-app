import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styles from './styles';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import AttractionDetails from './src/screens/AttractionDetails';
import Gallery from './src/screens/Gallery';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.appRoot}>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'AttractionDetails'} component={AttractionDetails} />
          <Stack.Screen name={'Gallery'} component={Gallery} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
