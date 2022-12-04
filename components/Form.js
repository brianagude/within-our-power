import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Form = ({ blok }) => {
  return (
    <form
      action={"https://formspree.io/f/" + blok.formspree_id}
      method="POST"
      {...storyblokEditable(blok)}
    >
      {blok.form_inputs.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <button type="submit">{blok.submit_text}</button>
    </form>
  );
};
 
export default Form;