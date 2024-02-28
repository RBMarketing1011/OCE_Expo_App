
import { StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'

const Button = ({ href, padding, color, shadowColor, icon, text }) =>
{
  return (
    href !== null ?
      <Link href={ href } asChild>
        <Pressable style={ styles.Button(padding, color, shadowColor) } >
          { icon }
          { text }
        </Pressable >
      </Link >
      :
      <Pressable style={ styles.Button(padding, color, shadowColor) }>
        { icon }
        { text }
      </Pressable>
  )
}

const styles = StyleSheet.create({
  Button: (padding, color, shadowColor) => ({
    backgroundColor: color,
    paddingVertical: padding.vertical,
    paddingHorizontal: padding.horizontal,

    borderRadius: 25,

    shadowColor: shadowColor,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    elevation: 5,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  })
})

export default Button