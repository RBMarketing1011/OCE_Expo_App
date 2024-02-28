
import { StyleSheet, View, Text, Image } from 'react-native'
import Button from '../../Clickables/Button'
import { colors, font, text } from '../../../constants'

const SlideComponent = ({ item, width }) =>
{
  return (
    <View style={ styles.SlideComponent(width) }>
      <View style={ styles.card }>
        <View style={ styles.cardImage }>
          <Image style={ styles.image } source={ item.image } resizeMode='cover' />
        </View>
        <View style={ styles.cardContent }>
          <View style={ styles.cardTitle }>
            <Text numberOfLines={ 1 } style={ styles.cardTitleText }>
              { item.title }
            </Text>
          </View>
          <View style={ styles.cardDesc }>
            <Text numberOfLines={ 3 } style={ styles.cardDescText }>
              { item.text }
            </Text>
          </View>
          <Text style={ styles.cardPrice }>
            { item.price }
          </Text>
          <Button
            href='/menu'
            padding={ {
              vertical: 15,
              horizontal: 40
            } }
            color={ colors.accent300 }
            shadowColor={ colors.neutral900 }
            text={
              <Text style={ {
                fontFamily: font.family.MainFontBold,
                fontSize: font.size.small,
                textTransform: text.transform.upper,
                color: colors.neutral900
              } }>Order Now</Text>
            }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  SlideComponent: (width) => ({
    width: width,
    height: 450,
    justifyContent: 'center',
    alignItems: 'center'
  }),

  card: {
    width: 350,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.accent700,
    borderRadius: 20,
    paddingBottom: 25,
    marginTop: 50,

    shadowColor: colors.neutral900,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  cardImage: {
    position: 'absolute',
    transform: [ { translateY: -75 } ],
    height: 150,
    width: 150,
    borderRadius: 150,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,

    marginTop: 100
  },
  cardTitle: {
    width: '100%',
    borderBottomWidth: 5,
    borderBottomColor: colors.accent300
  },
  cardTitleText: {
    fontFamily: font.family.MainFontBold,
    fontSize: font.size.xLarge,
    textAlign: text.align.center,
    color: colors.neutral100
  },
  cardDesc: {
    paddingHorizontal: 20
  },
  cardDescText: {
    fontFamily: font.family.MainFontRegular,
    fontSize: font.size.medium,
    textAlign: text.align.center,
    color: colors.neutral100
  },
  cardPrice: {
    fontFamily: font.family.MainFontRegular,
    fontSize: font.size.medium,
    textAlign: text.align.center,
    color: colors.neutral100
  }
})

export default SlideComponent