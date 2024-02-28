
import { StyleSheet, Image, Text, View, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { colors, font } from '../../constants'

const CardWithHref = ({ href, height, width, backgroundColor, image, text }) =>
{
  return (
    <Link href={ href } asChild>
      <Pressable style={ styles.Card(width, height, backgroundColor) }>
        <Image
          source={ image }
          style={ styles.image(width, height) }
          resizeMode='cover'
        />
        <View style={ styles.textContainer(width, height) }>
          <Text style={ styles.text }>{ text }</Text>
        </View>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  Card: (width, height, backgroundColor) => ({
    width: width,
    height: height,
    backgroundColor: backgroundColor,

    borderColor: colors.neutral900,
    borderWidth: 2,
    borderRadius: 10,

    shadowColor: colors.neutral900,
    shadowOpacity: 1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    elevation: 5,

    overflow: 'hidden',

    alignItems: 'center',
  }),
  image: (width, height) => ({
    width: width,
    height: height * .8
  }),
  textContainer: (width, height) => ({
    width: width,
    height: height * .2,

    justifyContent: 'center',
    alignItems: 'center'
  }),
  text: {
    fontFamily: font.family.MainFontBold,
    fontSize: font.size.medium,
    color: colors.neutral100
  }
})

export default CardWithHref