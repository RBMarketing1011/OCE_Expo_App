
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { colors, font } from '../constants'
import { useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'

import { Heading } from '../components'

import { LoadFonts } from '../components'

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
      <Stack>
        <Stack.Screen
          name='index'
          options={ {
            headerTitle: () => (
              <Heading
                text='omni coffee & eggs'
                font={ font.family.Linna }
                size={ font.size.large }
                color={ colors.neutral100 }
              />
            ),
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: colors.primary300 },
            headerShadowVisible: false,
          }
          }
        />

        <Stack.Screen
          name='home'
          options={ {
            headerShown: false
          } }
        />
      </Stack>

      <StatusBar style='light' />
    </>
  )
}

export default Layout