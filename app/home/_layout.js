
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { Heading } from '../../components'
import { colors, font, text } from '../../constants'

const Layout = () =>
{
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={ {
          tabBarLabel: 'Home',
          tabBarActiveTintColor: colors.accent300,
          tabBarInactiveTintColor: colors.neutral900,
          tabBarIcon: ({ size, color }) => <FontAwesome name='home' size={ size } color={ color } />,
          // tabBarLabel: () => (
          //   <Heading
          //     text='Home'
          //     font={ font.family.DMBold }
          //     size={ font.size.large }
          //     color={ colors.accent300 }
          //   />
          // ),
          tabBarStyle: { backgroundColor: colors.primary300 }
        } }
      />
    </Tabs>
  )
}

export default Layout