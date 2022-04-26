import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { LookBookContainer } from './styles'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} arrow`}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '50px',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, onClick } = props
  return (
    <div
      className={`${className} arrow`}
      style={{
        display: 'block',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '50px',
      }}
      onClick={onClick}
    />
  )
}

export const LookBook = () => {
  const LookBookImages = [
    'https://images.squarespace-cdn.com/content/v1/5ed00bab777fab6698681c63/1590692810434-WZXVBUW0FHEM92M454PQ/lauren-winter-20150715-IMG_9299-v1-FINAL.jpg',
    'https://images.squarespace-cdn.com/content/v1/5ed00bab777fab6698681c63/1590692808323-Q1DVYI2MDAKQNRPQK25M/lauren-winter-20150715-IMG_7316-v1-FINAL.jpg',
    'https://images.squarespace-cdn.com/content/v1/5ed00bab777fab6698681c63/1590692810434-WZXVBUW0FHEM92M454PQ/lauren-winter-20150715-IMG_9299-v1-FINAL.jpg',
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: window.innerWidth > 768 ? true : false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
  }

  return (
    <LookBookContainer>
      <Slider {...settings} className="slider">
        {LookBookImages.map(image => (
          <img src={image} alt="LookBook" />
        ))}
      </Slider>
    </LookBookContainer>
  )
}
