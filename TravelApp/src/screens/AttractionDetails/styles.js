import { Dimensions, Platform, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');
export default StyleSheet.create({
  attractionDetailRoot: {
    flex: 1, margin: 32,
  },
  mainImage: {
    width: '100%', height: height / 2,
  },
  imageStyle: {
    borderRadius: 20,

  },
  topMainImage: {
    margin: 20, flex: 1, justifyContent: 'space-between', flexDirection: 'row',
  },
  bottomMainImage: {
    height: 70, borderRadius: 20, backgroundColor: 'rgba(256,256,256,0.15)', margin: 10, // gap: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSlideItem: {
    width: 48, height: 48, borderRadius: 10,
  },
  scrollWrapper: {
    justifyContent: 'flex-start', alignItems: 'center', gap: 10,
    // width: '100%',
  },
  iconWrapper: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(256,256,256, 0.4)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxShadowIcon: {
    backgroundColor: '#ffffff', ...Platform.select({
      ios: {
        shadowColor: '#000000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4,
      }, android: {
        elevation: 4,
      },
    }),
  },
  icon: {
    width: 20, height: 20,
  },
  circleIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(256,256,256,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  basic: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoWrapper: { paddingHorizontal: 8, gap: 32, paddingTop: 40, paddingBottom: 10, overflow: 'hidden' },
  textBig: { fontSize: 30, fontWeight: 'bold' },
  subTitle: { fontSize: 25, fontWeight: 400 },
  name: {
    maxWidth: 300,
    overflow: 'hidden',
  }, address: {
    maxWidth: 300,
    overflow: 'hidden',
  },
  locationWrapper: { gap: 8, flexDirection: 'row', alignItems: 'center' },
  locationItem: {},
  timeWrapper: { gap: 8, flexDirection: 'row', alignItems: 'center' },
  timeItem: { fontWeight: 'bold' },
  map: {
    // ...StyleSheet.absoluteFillObject,
    height: 200,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    // justifyContent: 'flex-end',
    // alignItems: 'center',

  },
});
