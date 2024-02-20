
import { StyleSheet, SafeAreaView, View, Text, Image, Dimensions } from 'react-native'
import { Link } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'

import { icons, colors, font, text } from '../constants'
import { Heading } from '../components'

const Index = () =>
{

  const deviceWidth = Dimensions.get('screen').width
  const deviceHeight = Dimensions.get('screen').height

  return (
    <SafeAreaView>

      <View style={ styles.container }>

        <Heading
          text='Index Page'
          color={ colors.neutral900 }
          size={ font.size.xLarge }
          font={ font.family.DMBold }
        />

        {/* <Heading
          text='Welcome To'
          size={ font.size.medium }
          font={ font.family.DMMedium }
          color={ colors.neutral900 }
        />

        <Image style={ styles.img(deviceWidth) } source={ require('../assets/3D-OCE-Splotch-Logo.png') } />

        <Heading
          text='" where royalty meets "'
          size={ font.size.large }
          font={ font.family.Linna }
          color={ colors.neutral900 }
        /> */}

        {/* <Link style={ styles.loginBtn } href={ '/login' }>
          <View style={ styles.btnContent(deviceWidth) }>
            <FontAwesome6 name='arrow-right-to-bracket' size={ 25 } color={ colors.neutral900 } />
            <Heading
              text='Login'
              size={ font.size.large }
              font={ font.family.DMMedium }
              color={ colors.neutral900 }
            />
          </View>
        </Link>

        <Link href={ '/register' }>
          <Heading
            text='Register'
            size={ font.size.small }
            font={ font.family.DMBold }
            color={ colors.neutral900 }
          />
        </Link> */}

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: text.align.center,
    alignItems: text.align.center,
    gap: 10
  },
  img: (deviceWidth) => ({
    width: deviceWidth * .90,
    height: (deviceWidth * .90) * .75,
    resizeMode: 'contain'
  }),
  loginBtn: {
    backgroundColor: colors.accent300,
    color: colors.neutral900,
    width: 300,
    height: 70,
    paddingHorizontal: 100,
    paddingVertical: 20,
    fontSize: font.size.large,
    fontFamily: font.family.DMBold,
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 15,
    marginBottom: 10
  },
  btnContent: (deviceWidth) => ({
    flexDirection: 'row',
    width: 300,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  })
})

export default Index