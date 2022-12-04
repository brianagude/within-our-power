import { storyblokEditable } from "@storyblok/react";
 
const BlogItem = ({ blok }) => {
  return (
    <a href={blok.url} className="blog-item" {...storyblokEditable(blok)}>
      <img 
        src={blok.image.filename}
        alt={blok.image.alt}
      />
      <div className="blog-title">
        {blok.title}
      </div>
    </a>
  );
};
 
export default BlogItem;