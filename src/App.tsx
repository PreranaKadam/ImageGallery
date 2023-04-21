
import { useEffect, useState } from 'react';
import './App.css';
import ImageViewer from './components/ImageViewer';
import { image1, image2, image3, image4, image5 } from './images';
import ImageList from './components/ImageList';

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const imagesList = [image1,image2,image3,image4,image5];
 
  const handleClick = (index: any) => {
    setCurrentImage(index);
  }

  return (<>
<div className='maincontainer'>
      <ImageViewer images={imagesList} currentImage={currentImage} />
    <ImageList images={imagesList} handleClick={handleClick} currentImage={currentImage} setCurrentImage={setCurrentImage} />
    {/* <input
            type='checkbox'
            data-testid='toggle-slide-show-button'
          />
          <label className='ml-6'>Start Slide Show</label> */}
          </div>
  </>
  );
}

export default App;
