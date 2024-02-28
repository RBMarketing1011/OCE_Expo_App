
import { StyleSheet, Pressable, Image } from 'react-native'

const HeaderBtn = ({ imageUrl, dimension, handleClick }) =>
{
  return (
    <Pressable style={ styles.HeaderBtn } onPress={ handleClick }>
      <Image
        style={ styles.btnImg(dimension) }
        source={ imageUrl }
        resizeMode='cover'
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  HeaderBtn: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  })
})

export default HeaderBtn