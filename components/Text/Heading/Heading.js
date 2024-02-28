
import { StyleSheet, Text } from 'react-native'

const Heading = ({ text, font, size, color, align, translateX, translateY }) =>
{
  return (

    translateX || translateY ?
      <Text style={ styles.HeadingWithTranslate(font, size, color, translateX, translateY, align) }>
        { text }
      </Text>

      :

      <Text style={ styles.Heading(font, size, color, align) }>
        { text }
      </Text>

  )
}

const styles = StyleSheet.create({
  HeadingWithTranslate: (font, size, color, translateX, translateY, align) => ({
    fontFamily: font,
    fontSize: size,
    color: color,
    textAlign: align ? align : 'center',
    transform: [ { translateX }, { translateY } ]
  }),
  Heading: (font, size, color, align) => ({
    fontFamily: font,
    fontSize: size,
    color: color,
    textAlign: align ? align : 'center',
  })
})

export default Heading