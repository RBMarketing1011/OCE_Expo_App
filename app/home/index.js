
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { useRouter, Stack } from 'expo-router'
import { colors, font, text } from '../../constants'

import { Heading } from '../../components'

const Index = () =>
{

  return (
    <>
      <Stack.Screen
        options={ {
          headerTitle: () => (
            <Heading
              text='Home'
              font={ font.family.DMBold }
              color={ colors.neutral100 }
              size={ font.size.large }
            />
          ),
          headerStyle: { backgroundColor: colors.primary300 },
          headerTitleAlign: 'center'
        } }
      />
      <SafeAreaView style={ styles.Index }>
        <Text>Home</Text>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  Index: {

  }
})

export default Index