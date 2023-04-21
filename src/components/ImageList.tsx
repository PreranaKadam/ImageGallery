import previous from '../images/previous.png'
import next from '../images/next.png'
const ImageList = ({ images, handleClick, currentImage, setCurrentImage }: any) => {
  
  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }
  return (<>
    <div className='maindiv'>
      <img className='prevbutton' src={previous} onClick={handlePrev} />
      <span className="grid-container">
        {images?.length > 0 && images.map((src: any, index: any) => (
          <img className="grid-item" src={src} onClick={() => handleClick(index)} />))}
      </span>
      <img className='nextbutton' src={next} onClick={handleNext} />
    </div>
  </>
  );
}
export default ImageList;