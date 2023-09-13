import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styles from './styles';
import Home from './src/screens/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.homeRoot}>
      <StatusBar barStyle={'light-content'} />
      <Home />
    </SafeAreaView>
  );
}

export default App;
