/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Slider from "react-slick";
 
const BlogCarousel = ({ blok }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div {...storyblokEditable(blok)} className={"blog-carousel" + (blok.hide_navigation ? 'hide-navigation' : '')}>
      <Slider {...settings}>
        {blok.blog_items.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </Slider>
    </div>
  );
};
 
export default BlogCarousel;