
import { Pressable, Image } from 'react-native'
import styles from './HeaderBtn.style'

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

export default HeaderBtn