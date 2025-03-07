// ImageSlider.js
import { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  position: relative;
`;

const Images = styled.div`
  display: flex;
  transform: translateX(${({ index }) => -index * 100}%);
  transition: transform 0.5s ease-in-out;
`;

const Image = styled.img`
  width: 100%;
`;

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  return (
    <SliderContainer>
      <Images index={index}>
        {images.map((img, i) => (
          <Image key={i} src={img} alt={`Slide ${i}`} />
        ))}
      </Images>
      <button onClick={() => setIndex((index + 1) % images.length)}>Next</button>
    </SliderContainer>
  );
}

// Usage in App.js
// import ImageSlider from './ImageSlider';
// <ImageSlider images={['img1.jpg', 'img2.jpg', 'img3.jpg']} />
