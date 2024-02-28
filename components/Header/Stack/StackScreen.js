
import { StyleSheet, View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons'

import { colors, font, text } from '../../../constants'

const StackScreen = ({ title, headerRight }) =>
{
  //Simulate user is logged In or Not
  //Dev Purposes Only
  const loggedIn = false

  return (
    <Stack.Screen
      options={ {
        headerTitle: () => (
          title ?
            <View style={ styles.container }>
              <FontAwesome5 name='map-marker-alt' size={ 15 } color={ colors.neutral100 } />
              <View style={ styles.titleContainer }>
                <Text style={ styles.title }>{ title }</Text>
              </View>
            </View>

            :

            <Text style={ styles.title }>omni coffee & eggs</Text>
        ),
        headerStyle: {
          backgroundColor: colors.primary300,
          borderBottomColor: colors.neutral900,
          borderBottomWidth: 2
        },
        headerTitleAlign: 'center',
        headerRight: () => (
          !loggedIn &&
          <View style={ { marginRight: 10, marginBottom: 10 } }>
            { headerRight }
          </View>
        ),
      } }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleContainer: {
    borderBottomColor: colors.neutral100,
    borderBottomWidth: 1,
    paddingBottom: 2
  },
  title: {
    color: colors.neutral100,
    fontSize: font.size.xSmall,
    textTransform: text.transform.upper,
  },

})

export default StackScreen