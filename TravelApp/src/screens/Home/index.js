import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import attractionList from '../../data/attractions.json';
import categories from '../../data/categories.json';
import { useNavigation } from '@react-navigation/native';

const ALL = 'Tấc cả';
const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Tấc cả');
  const [attractionData, setAttractionData] = useState([]);
  useEffect(() => {
    setAttractionData(attractionList);
  }, []);
  useEffect(() => {
    if (selectedCategory === ALL) {
      setAttractionData(attractionList);
    } else {
      const filterData = attractionList.filter(item => item.categories.includes(selectedCategory));
      setAttractionData(filterData);
    }
  }, [selectedCategory]);
  return (// <SafeAreaView style={styles.homeContainer}>
    <View style={styles.homeRoot}>
      {/*<ScrollView contentContainerStyle={styles.attractionContainer}>*/}
      {/*  {attractionData?.map(item => (*/}
      {/*    <TouchableOpacity key={item.id}>*/}
      {/*      <AttractionCard subTitle={item.city} srcImage={Image1} title={item.name} />*/}
      {/*    </TouchableOpacity>*/}
      {/*  ))}*/}
      {/*</ScrollView>*/}
      <FlatList
        ListEmptyComponent={<Text
          style={{ fontSize: 16, textAlign: 'center', marginTop: 0, color: 'rgba(0, 0, 0, 0.5)' }}>Không tìm thấy thông
          tin
        </Text>}
        ListHeaderComponent={() => (<>
          <View style={{ paddingHorizontal: 32, paddingTop: 10 }}>
            <Title title={'Xách balo '} style={{ fontWeight: 'normal' }} />
            <Title title={'lên và đi thôi'} />
            <Title title={'Khám phá những nơi thú vị'} style={styles.subTitle} />
          </View>
          <Categories
            style={{ marginLeft: 32 }}
            onSelected={setSelectedCategory}
            selectedCategory={selectedCategory}
            categories={[ALL, ...categories]} />

        </>)}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 32 }}
        numColumns={2}
        data={attractionData} renderItem={({ item }) => (// <TouchableOpacity key={item.id}>
        <AttractionCard
          onPress={() => navigation.navigate('AttractionDetails', { item })}
          style={{ marginBottom: 12 }} subTitle={item.city} srcImage={item.images[0]} title={item.name} />
        // </TouchableOpacity>
      )} />

    </View>
    // </SafeAreaView>
  );
};

export default Home;


