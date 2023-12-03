import { useState, useRef, useEffect } from 'react';
import reactjsImage from './assets/images/reactjsImage.png';

function App() {
  const [count, setCount] = useState(0);
  const imageRef = useRef();
  const maxCount = 100;

  const incrementCounter = () => {
    if (count < maxCount) {
      setCount(prevCount => prevCount + 1)
    }
  }

  useEffect(() => {
    const loadInterval = setInterval(incrementCounter, 20);

    return () => {
      clearInterval(loadInterval)
    }
  }, [count]);

  const opacity = count / maxCount;

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.opacity = opacity;
      imageRef.current.style.filter = `blur(${10 - 10 * opacity}px)`;
    }
  }, [opacity])

  return (
    <>
      <div className="container">
        <h2 className="title">Image Loading Blur Effect</h2>
        <p className="sub-title">Onload observe the Image and Percentage Counter! 😊 </p>

        <div className="image-container">
          <div id="image" class="image">
            <img src={reactjsImage} ref={imageRef} class="center" />
          </div>
          <div id="number" class="number center">{count}%</div>
        </div>
      </div>
    </>
  )
}

export default App;
