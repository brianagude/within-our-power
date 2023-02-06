import { storyblokEditable } from "@storyblok/react";
 
const Image = ({ blok }) => {

  return (
    <div {...storyblokEditable(blok)} className="image-block">
      <img
        src={blok.image.filename}
        alt={blok.image.alt}
        key={blok.image.id}
      />
    </div>
  );
};

export default Image;