
import { Text } from 'react-native'
import styles from './Heading.style'

const Heading = ({ text, font, size, color }) =>
{
  return (
    <Text style={ styles.Heading(font, size, color) }>
      { text }
    </Text>
  )
}

export default Heading