import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";

const Header = ({ blok }) => (
  <header className="site-header" {...storyblokEditable(blok)}>
    <Link href={blok.logo_link.cached_url}>
      logo link
    </Link>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </header>
);
 
export default Header;