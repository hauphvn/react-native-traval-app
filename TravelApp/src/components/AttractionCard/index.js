import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Categories = ({ categories, selectedCategory, onSelected }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoriesRoot}
      data={categories}
      renderItem={({ item }) => {
        const selected = selectedCategory === item;
        return (
          <TouchableOpacity onPress={() => onSelected(item)}
                            style={[styles.itemContainer, selected ? styles.itemContainerSelected : {}]}>
            <Text
              style={[styles.item, selected ? styles.itemSelected : {}]}>{item}</Text>
          </TouchableOpacity>
        );
      }}
    />

  );
};

export default React.memo(Categories);
