/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Section = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className={"page-section " + blok.theme + '-theme '} id={blok.id}>
      <div className="container">
        {blok.content.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      {blok.backgroundImage.filename &&
        <img
          src={blok.backgroundImage.filename}
          alt={blok.backgroundImage.alt}
          className="background-image"
        />
      }
      
      {blok.mobileBackgroundImage.filename &&
        <img
          src={blok.mobileBackgroundImage.filename}
          alt={blok.mobileBackgroundImage.alt}
          className="background-image"
        />
      }
    </section>
  );
};
 
export default Section;