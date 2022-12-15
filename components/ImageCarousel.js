/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { storyblokEditable } from "@storyblok/react";
import Slider from "react-slick";
 
const ImageCarousel = ({ blok }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <div {...storyblokEditable(blok)} className={"images-carousel" + (blok.hide_navigation && ' hide-navigation')}>
      <Slider {...settings}>
        {blok.images.map((nestedBlok) => (
          <div className="carousel-image" key={nestedBlok.id}>
            <img
              src={nestedBlok.filename}
              alt={nestedBlok.alt}
              key={nestedBlok.id}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
 
export default ImageCarousel;