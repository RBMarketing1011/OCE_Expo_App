
import { StyleSheet, View, Text } from 'react-native'
import { font } from '../../../constants'

const InfoBar = ({ bgColor, bgOpacity }) =>
{
  //Variables if loggedIn
  //For Dev Use Only
  const loggedIn = true

  const user = {
    name: 'Anthony',
    gender: 'prefer not to say'
  }


  //Message To Display To Customers
  //Available To Change
  const greeting = 'Welcome Back'
  const name =
    loggedIn ?
      user.gender === 'male' ?
        `King ${ user.name }`
        :
        user.gender === 'female' ?
          `Queen ${ user.name }`
          :
          user.gender === 'prefer not to say' &&
          user.name
      :
      'Your Majesty'


  return (
    <View style={ styles.InfoBar }>
      <View style={ styles.bg(bgColor, bgOpacity) }></View>
      <Text style={ styles.text }>
        { greeting } { name }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  InfoBar: {
    alignItems: 'center',
    position: 'relative'
  },
  bg: (bgColor, bgOpacity) => ({
    position: 'absolute',
    backgroundColor: bgColor,
    opacity: bgOpacity,
    height: 30,
    width: '100%'
  }),
  text: {
    fontFamily: font.family.MainFontBold,
    position: 'absolute',
    marginTop: 5,
  },
})

export default InfoBar