import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import GoBackIcon from '../../../asserts/return.png';
import ShareIcon from '../../../asserts/share.png';
import Location from '../../../asserts/location.png';
import Clock from '../../../asserts/clock.png';

const AttractionDetails = ({ navigation, route }) => {
  const { item } = route?.params || {};
  console.log(item);
  const [uriMainImg, setUriMainImg] = useState();
  const mainImage = item?.images?.length ? item.images[0] : null;
  const listImages = item?.images || [];
  useState(() => {
    setUriMainImg(mainImage);
  }, []);
  const onGoBack = () => {
    return navigation.goBack();
  };

  function onSelectedImg(imgUri) {
    setUriMainImg(imgUri);
  }

  return (<View style={styles.attractionDetailRoot}>
    <ImageBackground resizeMode={'cover'} imageStyle={styles.imageStyle} style={styles.mainImage}
                     source={{ uri: uriMainImg }}>
      <View style={styles.topMainImage}>
        <TouchableOpacity hitSlop={8} style={[styles.iconWrapper, styles.boxShadowIcon]} onPress={onGoBack}>
          <ImageBackground style={styles.icon} source={GoBackIcon} />
        </TouchableOpacity>
        <TouchableOpacity hitSlop={8} style={[styles.iconWrapper, styles.boxShadowIcon]}>
          <ImageBackground style={styles.icon} source={ShareIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomMainImage}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.scrollWrapper}
          style={{
            flex: 1,
          }}>

          {listImages.map((imgUri, index) => <TouchableOpacity key={index} onPress={() => onSelectedImg(imgUri)}>
            <Image source={{ uri: imgUri }}
                   style={styles.imgSlideItem} />
          </TouchableOpacity>)}
        </ScrollView>
      </View>

    </ImageBackground>
    <View style={styles.infoWrapper}>
      <View style={styles.basic}>
        <View>
          <Text style={[styles.textBig, styles.name]}>{item.name}</Text>
          <Text style={[styles.subTitle]}>{item.country}</Text>
        </View>
        <Text style={[styles.textBig]}>{item.entry_price}</Text>
      </View>
      <View style={styles.locationWrapper}>
        <View style={[styles.circleIcon, styles.boxShadowIcon]}><Image style={styles.icon} source={Location} /></View>
        <Text style={styles.address}>{item.address}</Text>
      </View>
      <View style={styles.timeWrapper}>
        <View style={[styles.circleIcon, styles.boxShadowIcon]}><Image style={styles.icon} source={Clock} /></View>
        <Text style={styles.timeItem}>Open {item.opening_time}</Text>
      </View>
    </View>
  </View>);
};

export default AttractionDetails;


