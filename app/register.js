
import { View, Text } from 'react-native'
import { Heading } from '../components'
import { colors, font } from '../constants'

const Register = () =>
{
  return (
    <View style={ styles.Register }>
      <Heading
        text='Register Page'
        color={ colors.neutral900 }
        font={ font.family.DMBold }
        size={ font.size.xLarge }
      />
    </View>
  )
}

export default Register