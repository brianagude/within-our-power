import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Wrapper = ({ blok }) => {
  return (
    <div className="wrapper-section" {...storyblokEditable(blok)}>
      {blok.wrapped_items.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Wrapper;