import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  categoriesRoot: {
    // backgroundColor: '#ccc',
    maxHeight: 34,
    marginRight: -30,
  },
  item: {
    fontSize: 12,
    color: 'rgba(0,0,0.5)',
    paddingVertical: 12,
  },
  itemSelected: {
    fontWeight: 'bold',
    color: '#000000',
  },
  itemContainer: {
    marginRight: 17,
  },
  itemContainerSelected: {
    borderBottomWidth: 1,
    borderBottomColor: '#4681a3',
  },
});
