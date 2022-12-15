import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";

const Footer = ({ blok }) => (
  <footer className="site-footer" {...storyblokEditable(blok)}>
    <div className="container">
      <div className='footer-brand'>
        <Link href="/">
          <img 
            src={blok.logo.filename}
            alt={blok.logo.alt}
            class='header-logo'
          />
        </Link>
      </div>

      <div className='footer-copyright'>
        <p className="footer-text">&copy;{new Date().getFullYear()} {blok.text}</p>
        <nav class='footer-menu'>
          <ul>
            {blok.link_list.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </ul>
        </nav>
      </div>

    </div>
  </footer>
);
 
export default Footer;