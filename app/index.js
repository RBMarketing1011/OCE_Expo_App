
import
{
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  Dimensions,
  ScrollView
} from 'react-native'

import
{
  StackScreen,
  Button,
  CardWithHref,
  HeadingWithImage,
  InfoBar,
  Heading,
  Floating,
  RenderItem
} from '../components'

import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons'
import { CardCarousel } from '../components'

import { icons, colors, font, text, images } from '../constants'
import { useState } from 'react'

const Index = () =>
{
  //Variables if loggedIn
  //For Dev Use Only
  const loggedIn = false

  const newProducts = [
    {
      name: 'Breakfast',
      image: images.image3
    },
    {
      name: 'Specialty Lattes',
      image: images.image4
    },
    {
      name: 'Specialty Teas',
      image: images.image5
    },
    {
      name: 'Lunch',
      image: images.image6
    },
    {
      name: 'A La Carte',
      image: images.image7
    },
  ]

  //End Dev Variables

  const deviceWidth = Dimensions.get('screen').width
  const deviceHeight = Dimensions.get('screen').height

  //Carousel Data 
  const [ slideIndex, setSlideIndex ] = useState(0)

  const carouselData = {
    activeIndex: slideIndex,
    items: [
      {
        title: "Exercitation",
        text: 'Adipisicing est incididunt non velit proident elit esse quis exercitation aliquip ad. Est enim duis nisi nisi consequat commodo. Mollit mollit occaecat sint labore do occaecat exercitation ea.',
        price: '$7.99',
        image: images.image1
      },
      {
        title: "Reprehenderit",
        text: "In sunt ea minim ullamco magna. Eu officia officia labore ex aute. Deserunt pariatur laborum excepteur ex sint aliqua Lorem occaecat magna ullamco reprehenderit ex. Enim anim cillum consectetur consequat irure qui deserunt dolore dolor. Est enim fugiat labore sit Lorem quis minim ea mollit commodo ex reprehenderit ex. Id nostrud cillum fugiat dolor irure deserunt cillum.",
        price: '$7.99',
        image: images.image1
      },
      {
        title: "Non aliquip",
        text: "Consectetur nostrud cupidatat id laboris. Mollit sint laborum sit laborum Lorem enim anim dolor ullamco ut non Lorem qui. Eu ut veniam tempor sit dolore reprehenderit do fugiat. Nulla fugiat incididunt ullamco in non et amet pariatur. Et mollit incididunt ex laboris nostrud consequat occaecat sunt eu. Incididunt est excepteur adipisicing minim.",
        price: '$7.99',
        image: images.image1
      },
      {
        title: "Nulla id",
        text: "Labore commodo labore tempor tempor et est nostrud aute dolore fugiat irure laborum culpa. Do ad irure ad cupidatat ullamco fugiat cupidatat est mollit reprehenderit. Sint cillum aliquip eiusmod dolor fugiat ad deserunt ad qui do magna quis est nisi.",
        price: '$7.99',
        image: images.image1
      },
      {
        title: "Duis ut nostru",
        text: "Enim laboris sit ex ullamco sit aute Lorem excepteur. Duis adipisicing pariatur incididunt proident et consectetur eiusmod occaecat et nulla mollit. Excepteur anim laboris quis laboris do. Ullamco excepteur est sit nisi incididunt exercitation.",
        price: '$7.99',
        image: images.image1
      },
    ]
  }

  //Carousel Render
  const _renderItem = ({ item, deviceWidth }) =>
  {
    return <RenderItem
      item={ item }
      width={ deviceWidth }
    />
  }

  return (
    <SafeAreaView style={ { backgroundColor: colors.neutral100 } }>

      {/* Header */ }
      <StackScreen
        title='261 Peters St SW'
        headerRight={
          !loggedIn &&
          <Button
            href='/login'
            padding={ {
              vertical: 5,
              horizontal: 20
            } }
            color={ colors.accent300 }
            shadowColor={ colors.neutral900 }
            icon={
              <FontAwesome6
                name='arrow-right-to-bracket'
                size={ 20 }
                color={ colors.neutral100 }
              />
            }
          />
        }
      />

      {/* Scrollable View Between Header And Tabs */ }
      <ScrollView showsHorizontalScrollIndicator={ false }>

        {/* Hero Section */ }
        {/* BG Image For Hero Section */ }
        <ImageBackground
          style={ styles.hero(deviceWidth, deviceHeight) }
          source={ images.image2 }
          resizeMode='cover'
        >

          {/* Info Bar Display Directly Below Stack */ }
          <InfoBar
            bgColor={ colors.neutral100 }
            bgOpacity={ .5 }
          />

          {/* Order Button Container */ }
          <View style={ styles.orderBtnContainer }>

            {/* Order Button */ }
            <Button
              href='/menu'
              padding={ {
                vertical: 15,
                horizontal: 60
              } }
              color={ colors.primary300 }
              shadowColor={ colors.neutral900 }
              icon={
                <FontAwesome5
                  name='crown'
                  size={ 25 }
                  color={ colors.accent300 }
                />
              }
              text={
                <Text style={ {
                  fontFamily: font.family.MainFontBold,
                  fontSize: font.size.small,
                  textTransform: text.transform.upper,
                  color: colors.neutral100
                } }>Order Now</Text>
              }
            />
          </View>

        </ImageBackground>

        {/* Try Something New Section */ }
        <View style={ styles.section(colors.neutral100) }>

          <HeadingWithImage
            width={ deviceWidth }
            height={ deviceHeight }
            image={ images.underline }
            text='Treat Yourself'
          />

          {
            newProducts.map((product, index) => (
              <CardWithHref
                key={ index }
                href='/menu'
                height={ 200 }
                width={ deviceWidth * .85 }
                backgroundColor={ colors.accent300 }
                image={ product.image }
                text={ product.name }
              />
            ))
          }

        </View>

        {/* Rewards Section */ }

        <ImageBackground
          style={ [ styles.section(colors.accent100), styles.rewards(deviceWidth, deviceHeight) ] }
          source={ images.map }
          resizeMode='cover'
        >
          {/* Hovering Logo between sections */ }
          <View style={ styles.rewardsLogoContainer }>
            <Image
              style={ styles.rewardsLogo }
              source={ images.logo3D }
              resizeMode='cover'
            />
          </View>

          {/* Actual Content for the section */ }
          <View style={ styles.rewardsContent }>
            {/* Heading Component */ }
            <View style={ styles.rewardsHeading(deviceWidth) }>
              {/* Dark BG with .5 Opacity */ }
              <View style={ styles.rewardsHeadingBG }></View>

              <Floating
                X={ -140 }
                Y={ -21 }
                R='0deg'
                component={ <FontAwesome5 name='crown' size={ 20 } color={ colors.neutral100 } /> }
              />

              <Floating
                X={ 140 }
                Y={ -21 }
                R='0deg'
                component={ <FontAwesome5 name='crown' size={ 20 } color={ colors.neutral100 } /> }
              />

              <Heading
                text='EXCLUSIVE REWARDS'
                font={ font.family.MainFontBold }
                size={ font.size.medium }
                color={ colors.neutral100 }
                translateY={ 15 }
                translateX={ 0 }
              />
              <Heading
                text="for your pleasure"
                font={ font.family.HeadingFont }
                size={ font.size.xxLarge - 5 }
                color={ colors.neutral100 }
                translateY={ 0 }
                translateX={ 0 }
              />
            </View>

            <View style={ styles.descContainer }>
              <Heading
                text="As a valued member of the Omni Coffee & Eggs family, you're in for a treat. Indulge in our exclusive rewards program designed just for you. Sip, savor, and save as you enjoy special discounts, personalized offers, and mouth-watering rewards."
                font={ font.family.MainFontBold }
                size={ font.size.medium }
                color={ colors.neutral900 }
              />
            </View>
          </View>
          <View style={ styles.rewardsBox(deviceWidth) }>

            <CardCarousel
              data={ carouselData }
              carousel={ {
                layout: 'stack',
                data: carouselData,
                renderItem: _renderItem,
                sliderWidth: deviceWidth,
                itemWidth: deviceWidth,
                stateHandler: (index) => setSlideIndex(index),
                enableMomentum: false,
                autoplay: true,
                loop: true,
                autoplayInterval: 5000,
              } }
              pagination={ true }
            />
          </View>

          <Heading
            text='Join Our Rewards Now!'
            font={ font.family.MainFontBold }
            color={ colors.neutral900 }
            size={ font.size.xLarge }
          />
          <Button
            href='/register'
            padding={ {
              vertical: 15,
              horizontal: 60
            } }
            color={ colors.primary300 }
            shadowColor={ colors.neutral900 }
            text={
              <Text style={ {
                fontFamily: font.family.MainFontBold,
                fontSize: font.size.small,
                textTransform: text.transform.upper,
                color: colors.neutral100
              } }>Join Our Rewards Program</Text>
            }
          />
        </ImageBackground>

        {/* Promo Item Section */ }
        <View style={ [ styles.section(colors.neutral100), styles.promoItem(deviceWidth) ] }>
          <Image style={ styles.promoItemBg(deviceWidth) } source={ images.omniBowl } />
          <View style={ styles.promoCard(deviceWidth) }>
            <Floating
              X={ 300 }
              Y={ -230 }
              R='10deg'
              component={ <FontAwesome5 name='award' size={ 60 } color={ colors.accent300 } /> }
            />

            <View>
              <Heading
                text='Top Seller'
                font={ font.family.MainFontBold }
                size={ font.size.medium }
                color={ colors.neutral100 }
                align={ text.align.left }
              />

              <Heading
                text='thee omni bowl'
                font={ font.family.HeadingFont }
                size={ font.size.xxLarge - 5 }
                color={ colors.neutral100 }
                align={ text.align.left }
              />

              <Heading
                text='Herb Roasted Potato, Smoked Bacon, Sausage, Scrambled Egg, Onions, Gouda Cheese, Fried Herbs, Omni Gold Sauce'
                font={ font.family.MainFontMedium }
                size={ font.size.small }
                color={ colors.neutral100 }
                align={ text.align.left }
              />
            </View>

            <Button
              href='/register'
              padding={ {
                vertical: 15,
                horizontal: 60
              } }
              color={ colors.primary300 }
              shadowColor={ colors.neutral900 }
              text={
                <Text style={ {
                  fontFamily: font.family.MainFontBold,
                  fontSize: font.size.small,
                  textTransform: text.transform.upper,
                  color: colors.neutral100
                } }>Add To Cart</Text>
              }
            />

          </View>
        </View>


      </ScrollView>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  // Hero Section CSS
  hero: (width, height) => ({
    width: width,
    height: height * .75,
  }),
  orderBtnContainer: {
    width: '100%',
    height: '85%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  //New Section CSS
  section: (color) => ({
    width: '100%',
    marginBottom: 30,
    backgroundColor: color,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30
  }),

  // Rewards Section CSS 
  rewards: (width, height) => ({
    width: width,
    marginTop: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40
  }),
  rewardsLogoContainer: {
    position: 'absolute',
    zIndex: 10,
    height: 100,
    width: 100,

    transform: [ { translateY: -90 } ],

    backgroundColor: colors.neutral100,
    borderRadius: 100,
    padding: 90,

    shadowColor: colors.neutral900,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,

    justifyContent: 'center',
    alignItems: 'center'
  },
  rewardsLogo: {

    height: 100,
    width: 150,
  },
  rewardsContent: {
    marginTop: 120,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20
  },
  rewardsHeading: (width) => ({
    width: width * .9,
    height: 125,
    borderColor: colors.primary300,
    borderWidth: 2,
    borderRadius: 20,
    overflow: 'hidden',

    justifyContent: 'center',
    alignItems: 'center',
  }),
  rewardsHeadingBG: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: colors.primary700,
    opacity: .6
  },
  descContainer: {
    paddingHorizontal: 20,
  },
  rewardsBox: (width, height) => ({
    width: width,
  }),

  promoItem: (width) => ({
    width: width
  }),
  promoItemBg: (width) => ({
    position: 'absolute',
    width: width,
    height: 300,
    transform: [ { translateX: -width * .25 } ]
  }),
  promoCard: (width) => ({
    width: width * .9,
    height: 310,
    marginTop: 200,
    backgroundColor: colors.primary700,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: 25,

    shadowColor: colors.neutral900,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  })
})

export default Index