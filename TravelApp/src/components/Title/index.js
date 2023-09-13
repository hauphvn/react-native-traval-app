import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Title = ({ title, style }) => {
  return (<Text style={[styles.titleRoot, style]}>
    {title}
  </Text>);
};
Title.defaultProps = {
  title: 'Title default',
};
export default Title;
