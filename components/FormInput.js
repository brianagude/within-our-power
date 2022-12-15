import { storyblokEditable } from "@storyblok/react";
 
const Form = ({ blok }) => {
  return (
    <div className={"input-wrapper " + (blok.half_width && 'half-width')} {...storyblokEditable(blok)}>
      <label 
        for={blok.input_id} 
        class={blok.hide_label && "visually-hidden"}
      >
        {blok.label_text}{blok.required_field && "*"}
      </label>
      {
        blok.input_type == "textarea" ?
        <textarea 
          type={blok.input_type} 
          name={blok.input_id} 
          id={blok.input_id} 
          placeholder={blok.placeholder ? blok.placeholder : ''}
          required={blok.required_field && 'true'}
        />

        :
      
        <input 
          type={blok.input_type} 
          name={blok.input_id} 
          id={blok.input_id} 
          placeholder={blok.placeholder ? blok.placeholder : ''}
          required={blok.required_field && 'true'}
        />
      }
    </div>
  );
};
 
export default Form;