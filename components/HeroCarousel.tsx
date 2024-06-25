"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: "/assets/images/laptop.png", alt: "smartwatch" },
  { imgUrl: "/assets/images/tab.png", alt: "bag" },
  { imgUrl: "/assets/images/bag.png", alt: "lamp" },
  { imgUrl: "/assets/images/lcd.png", alt: "air fryer" },
  { imgUrl: "/assets/images/phone.png", alt: "chair" },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        // autoPlay
        infiniteLoop
        // interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            height={484}
            width={484}
            key={image.alt}
            className="image-contain"
          />
        ))}
      </Carousel>
      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  );
};

export default HeroCarousel;
