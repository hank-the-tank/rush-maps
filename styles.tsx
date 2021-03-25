import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  gps: {
    flex: 1,
    position: 'absolute',
    bottom: 70,
    right: 20
  },
  destinationList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  item: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 18
  },
  buttonLabel: {
    marginLeft: 30,
    fontSize: 20,
    color: 'black',
    opacity: 1
  },
  button: {
    marginRight: 30,
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  }
})
