import {StyleSheet} from 'react-native';
import {Colors} from '../../style/Colors';

export const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.backgroundDarkest,
    paddingTop: '4%',
    paddingHorizontal: '4%',
  },
  tabView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    width: '96%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf: 'center',
    marginBottom: '4%',
  },
  tab: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  bottomView: {
    position: 'absolute',
    bottom: '4%',
    flex: 1,
    paddingVertical: '2%',
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputField: {
    backgroundColor: Colors.backgroundTabDark,
    flex: 1,
    borderTopEndRadius: 4,
    borderTopStartRadius: 4,
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 4,
  },
  FAB: {backgroundColor: Colors.backgroundAccentDark, marginLeft: '2%'},
});
