
import { StyleSheet, SafeAreaView } from 'react-native'
import { Heading, StackScreen } from '../components'
import { colors, font } from '../constants'

const Register = () =>
{
  return (
    <SafeAreaView style={ styles.container }>
      <StackScreen title='261 Peters St SW' />
      <Heading
        text='Register Page'
        color={ colors.neutral900 }
        font={ font.family.MainFontBold }
        size={ font.size.xLarge }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Register