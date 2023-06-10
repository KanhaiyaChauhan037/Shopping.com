import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://i.postimg.cc/598f9fSv/one1.png" },
    { url: "https://i.postimg.cc/yNxcSd2X/two2.png" },
    { url: "https://i.postimg.cc/wTHg7nwr/three3.png" },
    { url: "https://i.postimg.cc/jj368NyF/one1.png" },
    { url: "https://i.postimg.cc/2yNmdtrV/two2heal.png" },
  ];


const ImageSlider = () => {
  return (
    <div>
       <SimpleImageSlider
        width={"100%"}
        height={200}
        images={images}
        // showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={1.5}
      />
    </div>
  )
}

export default ImageSlider
