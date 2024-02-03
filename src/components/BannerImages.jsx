import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
  border-radius: 20px;
`;

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.img`
  width: 100%;
  height: 200px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "#333" : "#bbb")};
  border-radius: 50%;
  cursor: pointer;
`;

const BannerImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  let images = [
    "https://imgs.search.brave.com/m5uimNhN8PWgJ-xav3Qvom0MQJOuba3GLlWrhgWiehw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvMmYxUHEy/eThhcVVYV2dWU0No/MWNONC9kZmU1MWUy/MDRjYmVmOGZkZjA0/OWIzMWY4OWE2NWUw/NS9mb29kLWFuZC1k/cmluay1pbWFnZXMu/anBnP2ZpdD1maWxs/Jnc9NjAwJmg9NDAw",
    "https://imgs.search.brave.com/_LgH4mEf3UVQLlBet5KrTNIJhf-ZVU7NGcQD3V_k4P4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9tdWVzbGktYnJl/YWtmYXN0LWZvb2Qt/cGhvdG9ncmFwaHkt/ZnJlZS1waG90by5q/cGc_dz02MDAmcXVh/bGl0eT04MA",
    "https://imgs.search.brave.com/BcF60PtevsoaBJgeQOGH7CRaDA8g9hlNTe6yF4T2Vuw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/aWctc2FuZHdpY2gt/aGFtYnVyZ2VyLXdp/dGgtanVpY3ktYmVl/Zi1idXJnZXItY2hl/ZXNlLXRvbWF0by1y/ZWQtb25pb24td29v/ZGVuLXRhYmxlXzI4/MjktMTk2MzEuanBn/P3NpemU9NjI2JmV4/dD1qcGc",
    "https://imgs.search.brave.com/iWUfw3hu-i5qUOsrwknzkczI53qmF6z3yYBRcmWCczg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/OTgzNTUxMC9waG90/by90YXN0eS12ZWdh/bi1pbmRpYW4tZm9v/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9aE9lamdZQVBx/V0VFV1VhV3dJT0kw/X2hRcXpWUzJ5cG90/VE90WEZxU1Z0az0",
    "https://imgs.search.brave.com/Fe_up8CouxGasTHjCGUNepC1bYlVWqZsUl1hqob_v9Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTk4NDc4NDQtNTMx/NTY5NWRhZGFlP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRSOGZHUmxi/R2xqYVc5MWN5VXlN/R1p2YjJSOFpXNThN/SHg4TUh4OGZEQT0"
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <SliderContainer>
      <SlideWrapper
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </SlideWrapper>

      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default BannerImages;
