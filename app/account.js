
import { StyleSheet, SafeAreaView } from 'react-native'

import { Heading, StackScreen } from '../components'
import { colors, font } from '../constants'

const Account = () =>
{
  return (
    <SafeAreaView style={ styles.Account }>
      <StackScreen title='261 Peters St SW' />
      <Heading
        text='Account Page'
        color={ colors.neutral900 }
        size={ font.size.xLarge }
        font={ font.family.MainFontBold }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Account: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Account