import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#37758e',
  },
  homeRoot: {
    flex: 1,
    backgroundColor: '#ffffff',
    // padding: 32,
  },
  subTitle: {
    marginTop: 40, marginBottom: 34, fontSize: 20, color: '#000000',
  },
  attractionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 15,
  },
});
