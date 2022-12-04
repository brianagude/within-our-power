import React, { useState, useEffect } from 'react';
import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

const AccordionItem = ({ blok }) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  useEffect(() => setText(render(blok.text) ? render(blok.text) : ''), [])

  return (
    <div className="accordion-item" {...storyblokEditable(blok)}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="title">{blok.title}</div>
        <div className="icon">
          {isActive ? <img src="./images/minus.svg" alt="close accordion icon" /> : <img src="./images/plus.svg" alt="close accordion icon" />}
        </div>
      </div>
      {isActive && <div className="accordion-content">{render(blok.content)}</div>}
    </div>
  );
};

export default AccordionItem;