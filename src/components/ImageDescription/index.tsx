import { ImageDescriptionContainer, PreviewImages } from './styles'
import { useEffect, useState } from 'react'

export const ImageDescription = ({ imageOne, imageTwo }) => {
  const [currentImage, setCurrentImage] = useState(imageOne)

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentImage(imageOne)
  }, [imageOne])

  return (
    <ImageDescriptionContainer>
      {window.innerWidth > 768 && (
        <PreviewImages>
          <img src={imageOne} alt="images" onClick={() => setCurrentImage(imageOne)} />
          <img src={imageTwo} alt="images" onClick={() => setCurrentImage(imageTwo)} />
        </PreviewImages>
      )}

      <img src={currentImage} alt="images" id="mainImage" />
    </ImageDescriptionContainer>
  )
}
