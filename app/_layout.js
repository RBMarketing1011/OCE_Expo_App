
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { FontAwesome6 } from '@expo/vector-icons'
import { View, Text } from 'react-native'

import { LoadFonts } from '../components/'
import { colors, font } from '../constants'

const Layout = () =>
{
  const [ appReady, setAppReady ] = useState(false)
  //Load Fonts Func() imported from components
  LoadFonts(appReady, setAppReady)

  //Hide SplashScreen when assets loaded
  if (appReady)
  {
    //Hide Splashscreen
    SplashScreen.hideAsync()
  } else if (!appReady)
  {
    return null
  }

  return (
    <>
      <Tabs
        screenOptions={ {
          tabBarActiveTintColor: colors.accent300,
          tabBarInactiveTintColor: colors.neutral100,
          tabBarStyle: {
            backgroundColor: colors.primary300,
            borderTopColor: colors.neutral900,
            borderTopWidth: 2
          },
          tabBarLabelStyle: {
            fontFamily: font.family.MainFontBold,
            fontSize: font.size.xSmall,
            marginTop: 15,
            marginBottom: 'auto'
          },
          tabBarIconStyle: { display: 'none' },
        } }
      >
        <Tabs.Screen
          name='index'
          options={ {
            tabBarLabel: 'HOME',
            href: '/'
          } }
        />

        <Tabs.Screen
          name='rewards'
          options={ {
            tabBarLabel: ({ size, color }) => (
              <View style={ {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,

                marginTop: 15,
                marginBottom: 'auto'
              } }>
                <Text style={ {
                  fontFamily: font.family.MainFontBold,
                  fontSize: font.size.xSmall,
                  color: color
                } }
                >REWARDS</Text>
                <FontAwesome6 name='money-bill-wave' size={ size } color={ color } />
              </View>
            ),
            href: '/rewards'
          } }
        />

        <Tabs.Screen
          name='menu'
          options={ {
            tabBarLabel: 'MENU',
            href: '/menu'
          } }
        />

        <Tabs.Screen
          name='reorder'
          options={ {
            tabBarLabel: 'REORDER',
            href: '/reorder'
          } }
        />

        <Tabs.Screen
          name='account'
          options={ {
            tabBarLabel: 'ACCOUNT',
            href: '/account'
          } }
        />








        {/* Screens Below Here Are Not Visible In Tabs But Pages Exist */ }

        <Tabs.Screen
          name='login'
          options={ {
            href: null
          } }
        />

        <Tabs.Screen
          name='register'
          options={ {
            href: null
          } }
        />



      </Tabs>

      <StatusBar style='light' />
    </>
  )
}

export default Layout