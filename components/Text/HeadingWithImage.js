
import { StyleSheet, View, Text, Image } from 'react-native'
import { font, text } from '../../constants'

const HeadingWithImage = ({ width, height, image, text }) =>
{
  return (
    <View style={ styles.HeadingWithImage }>
      <Image
        source={ image }
        style={ styles.image(width, height) }
        resizeMode='contain'
      />
      <Text style={ styles.text }>{ text }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  HeadingWithImage: {
    marginTop: 15,

    alignItems: 'center',
  },
  image: (width, height) => ({
    position: 'absolute',
    width: width * .85,
    height: height * .06
  }),
  text: {
    fontFamily: font.family.HeadingFont,
    fontSize: font.size.large,
    textTransform: text.transform.lower,
    marginTop: 30
  },
})

export default HeadingWithImage