/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';
 
const TextBlock = ({ blok }) => {
  const [text, setText] = useState('');
  useEffect(() => setText(render(blok.text) ? render(blok.text) : ''), [])

  return (
    <div {...storyblokEditable(blok)} className="text-block">
      {blok.title && <h2 className="title">{blok.title}</h2>}
      {blok.subtitle && <h3 className="subtitle">{blok.subtitle}</h3>}
      <p className="lead">{text}</p>
      <small>{render(blok.finePrint)}</small>
    </div>
  );
};

export default TextBlock;