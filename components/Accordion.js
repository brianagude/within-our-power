import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Accordion = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="accordion" id={blok.id}>
      {blok.items.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Accordion;