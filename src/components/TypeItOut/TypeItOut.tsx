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

  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    if (!isBrowser) return; // Only run if it's client-side (in the browser)

    const element = document.getElementById(uniqueId.current);
    if (!element) return; // Ensure the element exists

    // Use a slight delay to ensure the element is fully mounted
    const timeout = setTimeout(() => {
      const instance = new TypeIt(`#${uniqueId.current}`, {
        speed: speed,
        waitUntilVisible: true,
      })
        .type(text)
        .go();

      return () => {
        instance.destroy(); // Cleanup on unmount
      };
    }, 100); // Adjust delay if necessary

    return () => clearTimeout(timeout); // Cleanup the timeout
  }, [isBrowser, text, speed]);

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
