import React, { useState, useEffect } from 'react';
import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';
 
const CtaBlock = ({ blok }) => {
  const [text, setText] = useState('');
  useEffect(() => setText(render(blok.text) ? render(blok.text) : ''), [])
  return (
    <div {...storyblokEditable(blok)} className="cta-block">
      {blok.text && blok.url ? <a href={blok.url.url} className="btn">{blok.text}</a> : ''}
      <small className="btn-fine-print">{render(blok.finePrint)}</small>
    </div>
  );
};
 
export default CtaBlock;