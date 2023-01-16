import React, { useState, useEffect } from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";

const Header = ({ blok }) => {
  const [isActive, setIsActive] = useState(false);

  return (
  <header className={blok.show_menu ? "site-header" : "site-header center-logo"} {...storyblokEditable(blok)}>
    <div className="container">
      <Link href="/">
        <img 
          src={blok.logo.filename}
          alt={blok.logo.alt}
          className='header-logo'
        />
      </Link>
      
      
      {blok.show_menu && (
        <button className='menu-toggle' onClick={() => setIsActive(!isActive)}>
          <img 
            src={blok.menu_icon.filename}
            alt={blok.menu_icon.alt}
          />
        </button>
      )}

      <nav className={(isActive ? 'show header-menu' : 'header-menu')}>
        <div className="container">
          <div className='menu-logo-wrapper'>
            <img 
              src={blok.menu_logo.filename}
              alt={blok.menu_logo.alt}
              className='menu-logo'
            />
          </div>
          <ul>
            {blok.link_list.map((nestedBlok) => (
              <li className='header-link' key={nestedBlok._uid}><StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} /></li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  </header>
  )
};
 
export default Header;