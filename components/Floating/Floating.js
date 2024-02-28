
import { StyleSheet, View, Text } from 'react-native'

const Floating = ({ X, Y, R, component }) =>
{
  return (
    <View style={ styles.Floating(X, Y, R) }>
      { component }
    </View>
  )
}

const styles = StyleSheet.create({
  Floating: (X, Y, R) => ({
    position: 'absolute',
    transform: [ { translateX: X }, { translateY: Y }, { rotate: R } ],
    zIndex: 100
  })
})

export default Floating