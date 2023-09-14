import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  card: {
    padding: 4, borderWidth: 1, borderColor: '#e2e2e2', borderRadius: 15,

  }, image: {
    width: (width - 96) / 2, height: 100, borderRadius: 15,
  }, title: {
    fontSize: 12, fontWeight: '500', marginTop: 12, marginLeft: 6, color: '#000000',
  }, subTitle: {
    fontSize: 10, fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.5)',

  },
  subTitleContainer: {
    flexDirection: 'row',
    marginBottom: 12, marginLeft: 6, marginTop: 4,
    gap: 5,
  },
  location: {
    width: 13,
    height: 13,
  },

});
