import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import IntroText from '../components/IntroText/IntroText';
import './index.scss';
import GridFade from '../components/GridFade/GridFade';
import TypeItOut from '../components/TypeItOut/TypeItOut';
const phrases = ["You've been with us since the beginning:", 'Every sunset,'];
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section className="text-photos-container">
        <TypeItOut text="Dominique & Sabigaynn want to invite you." />
        <GridFade directory="headerImgs" />
      </section>
      <section className="text-photos-container">
        <TypeItOut text="You've been with us since the beginning:" />
        <GridFade directory="headerImgs" />
      </section>
      <section className="text-photos-container">
        <TypeItOut text="Every sunset," />
        <GridFade directory="sunsetImgs" />
      </section>
      <section className="text-photos-container">
        <TypeItOut text="every ocean," />
        <GridFade directory="oceanImgs" />
      </section>
      <section className="text-photos-container">
        <TypeItOut text="every country." />
        <GridFade directory="headerImgs" />
      </section>
      <section className="text-photos-container">
        <TypeItOut text="Now we invite you to come with us on our first trip as we begin our journey as Mr. & Mrs." />
        <GridFade directory="headerImgs" />
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
