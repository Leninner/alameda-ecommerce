import { ImageDescriptionContainer, PreviewImages } from './styles'
import { useEffect, useState } from 'react'

export const ImageDescription = ({ imageOne, imageTwo }) => {
  const [currentImage, setCurrentImage] = useState(imageOne)

  useEffect(() => {
    setCurrentImage(imageOne)
  }, [imageOne])

  return (
    <ImageDescriptionContainer>
      <PreviewImages>
        <img
          src={imageOne}
          alt="images"
          onClick={() => setCurrentImage(imageOne)}
        />
        <img
          src={imageTwo}
          alt="images"
          onClick={() => setCurrentImage(imageTwo)}
        />
      </PreviewImages>

      <img src={currentImage} alt="images" id="mainImage" />
    </ImageDescriptionContainer>
  )
}
