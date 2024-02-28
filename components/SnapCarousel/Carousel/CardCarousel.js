
import { StyleSheet } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { colors } from '../../../constants'

const CardCarousel = ({ carousel, pagination, data }) =>
{

  return (
    <>
      <Carousel
        layout={ carousel.layout }
        data={ data.items }
        renderItem={ carousel.renderItem }
        sliderWidth={ carousel.sliderWidth }
        itemWidth={ carousel.itemWidth }
        onSnapToItem={ carousel.stateHandler }
        enableMomentum={ false }
        lockScrollWhileSnapping
        autoplay={ carousel.autoplay }
        useScrollView
        loop={ carousel.loop }
        autoplayInterval={ carousel.autoplayInterval }
      />

      {
        pagination &&
        <Pagination
          dotsLength={ data.items.length }
          activeDotIndex={ data.activeIndex }
          dotStyle={ {
            width: 20,
            height: 20,
            borderRadius: 10,
            marginHorizontal: 0,
            backgroundColor: colors.neutral900
          } }
          inactiveDotStyle={ {
            // Define styles for inactive dots here
          } }
          inactiveDotOpacity={ 0.4 }
        />
      }

    </>
  )
}

const styles = StyleSheet.create({
  CardCarousel: {

  }
})

export default CardCarousel