import {Dimensions} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  tinyIcon: {
    width: 25,
    height: 25,
  },

  infoWrapper: {
    width: '70%',
    marginVertical: 10,
    alignSelf: 'flex-end',
    alignContent: 'center',
  },

  infoContent: {
    marginHorizontal: 5,
  },

  infoHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  itemWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  itemContent: {
    flex: 1,
    marginHorizontal: 5,
  },
  itemFoto: {
    width: WIDTH,
    marginBottom: 5,
    height: WIDTH,
  },
  itemHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: commonStyles.colors.black,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: commonStyles.colors.success,
  },
  itemFooter: {
    fontSize: 15,
    color: commonStyles.colors.black,
  },

  totalWrapper: {
    marginTop: 10,
    marginBottom: 35,
  },
  totalHeader: {
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  totalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
    color: commonStyles.colors.black,
  },
  totalPrice: {
    fontSize: 23,
    fontWeight: 'bold',
    color: commonStyles.colors.black,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
