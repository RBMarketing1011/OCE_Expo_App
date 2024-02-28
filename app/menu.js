
import { StyleSheet, SafeAreaView } from 'react-native'
import { Heading, StackScreen } from '../components'
import { colors, font } from '../constants'

const Menu = () =>
{
  return (
    <SafeAreaView style={ styles.Menu }>
      <StackScreen title='261 Peters St SW' />
      <Heading
        text='Menu Page'
        color={ colors.neutral900 }
        size={ font.size.xLarge }
        font={ font.family.MainFontBold }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Menu: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Menu