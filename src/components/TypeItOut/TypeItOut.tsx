import React, { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

interface TypeItOutProps {
  text: string;
  speed?: number;
}

const TypeItOut: React.FC<TypeItOutProps> = ({ text, speed = 100 }) => {
  const uniqueId = useRef(
    `typeit-container-${Math.random().toString(36).substring(2, 15)}`,
  );

  useEffect(() => {
    // Ensure the component only runs on the client
    if (typeof window === 'undefined') return;

    const element = document.getElementById(uniqueId.current);
    if (!element) return; // Ensure the element exists before initializing TypeIt

    const instance = new TypeIt(`#${uniqueId.current}`, {
      speed: speed,
      waitUntilVisible: true,
    })
      .type(text)
      .go();

    return () => {
      instance.destroy(); // Cleanup TypeIt instance on component unmount
    };
  }, [text, speed]);

  return (
    <div
      id={uniqueId.current}
      style={{
        fontFamily: "'Playwrite TZ', cursive",
        fontSize: '14pt',
        lineHeight: '1.5em',
        textAlign: 'center',
        minHeight: '150px',
        color: 'white',
        maxWidth: '75%',
        margin: '0 auto',
      }}
    ></div>
  );
};

export default TypeItOut;
