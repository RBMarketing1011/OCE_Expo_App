
import { StyleSheet, SafeAreaView } from 'react-native'
import { Heading, StackScreen } from '../components'
import { colors, font } from '../constants'

const Reorder = () =>
{
  return (
    <SafeAreaView style={ styles.Reorder }>
      <StackScreen title='261 Peters St SW' />
      <Heading
        text='Reorder Page'
        color={ colors.neutral900 }
        size={ font.size.xLarge }
        font={ font.family.MainFontBold }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Reorder: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Reorder