import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import ImgLocation from '../../../asserts/map-pin.png';

const AttractionCard = ({ srcImage, title, subTitle, style }) => {
  return (<View style={[styles.card, style]}>
    <Image style={styles.image} source={srcImage} />
    <Text style={styles.title}>{title}</Text>
    <View style={styles.subTitleContainer}>
      <Image style={styles.location} source={ImgLocation} />
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  </View>);
};

export default React.memo(AttractionCard);
