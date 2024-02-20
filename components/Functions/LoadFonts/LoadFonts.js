import { useState, useCallback, useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

import Linna from '../../../assets/fonts/Linna-Regular.ttf'
import DMRegular from '../../../assets/fonts/DMSans-Regular.ttf'
import DMMedium from '../../../assets/fonts/DMSans-Medium.ttf'
import DMBold from '../../../assets/fonts/DMSans-Bold.ttf'

//Prevent SplashScreen From hiding until assets loaded
SplashScreen.preventAutoHideAsync()

const LoadFonts = (appReady, setAppReady) =>
{
  useEffect(() =>
  {
    const loadFonts = async () =>
    {
      if (!appReady)
      {
        try
        {
          // Pre-load fonts, make any API calls you need to do here
          await Font.loadAsync({
            Linna,
            DMRegular,
            DMMedium,
            DMBold
          })
        } catch (err)
        {
          console.warn(err)
        } finally
        {
          // Set appReady to true so SplashScreen will disappear
          // and the application will render
          setAppReady(true)
        }
      }
    }

    loadFonts()

  }, [ appReady ])
}

export default LoadFonts