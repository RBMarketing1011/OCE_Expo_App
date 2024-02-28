
import { StyleSheet, SafeAreaView } from 'react-native'
import { Heading, StackScreen } from '../components'
import { colors, font } from '../constants'

const Rewards = () =>
{
  return (
    <SafeAreaView style={ styles.Rewards }>
      <StackScreen title='261 Peters St SW' />
      <Heading
        text='Rewards Page'
        color={ colors.neutral900 }
        size={ font.size.xLarge }
        font={ font.family.MainFontBold }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Rewards: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Rewards