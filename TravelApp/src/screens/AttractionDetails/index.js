import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const AttractionDetails = ({ navigation, route }) => {
  const { item } = route?.params || {};
  const onGoBack = () => {
    return navigation.goBack();
  };
  return (
    <View style={styles.attractionDetailRoot}>
      <Text onPress={onGoBack} style={{ margin: 10 }}>back</Text>
      <Text>{item?.name}</Text>
    </View>
  );
};

export default AttractionDetails;


