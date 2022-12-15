import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";

const Header = ({ blok }) => (
  <header className="site-header" {...storyblokEditable(blok)}>
    <div className="container">
      <Link href="/">
        <img 
          src={blok.logo.filename}
          alt={blok.logo.alt}
          class='header-logo'
        />
      </Link>
      
      
      {blok.show_menu && (
        <button class='menu-toggle'>
          <img 
            src={blok.menu_icon.filename}
            alt={blok.menu_icon.alt}
          />
        </button>

        // <nav class='header-menu'>
        //   <ul>
        //     {blok.link_list.map((nestedBlok) => (
        //       <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        //     ))}
        //   </ul>
        // </nav>
      )}
    </div>
  </header>
);
 
export default Header;