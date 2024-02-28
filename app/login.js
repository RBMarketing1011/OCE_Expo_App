
import { StyleSheet, SafeAreaView } from 'react-native'
import { colors, font } from '../constants'
import { Heading, StackScreen } from '../components'

const Login = () =>
{
  return (
    <SafeAreaView style={ styles.container }>
      <StackScreen title='261 Peters St SW' />
      <Heading
        text='Login Page'
        color={ colors.neutral900 }
        size={ font.size.xLarge }
        font={ font.family.MainFontBold }
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

export default Login