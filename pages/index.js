import Head from 'next/head';

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react';
import Layout from '../components/Layout';

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>Within Our Power | { story && story.name }</title>
        {/* favicon stuff */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
        <link rel="manifest" href="/favicons/site.webmanifest"/>
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

        {/* meta stuff */}
        <link rel="canonical" href="https://withinourpower.net"/>
        <meta property="og:site_name" content="Within Our Power"/>
        <meta property="og:title" content="Within Our Power"/>
        <meta property="og:url" content="https://withinourpower.net"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://a-us.storyblok.com/f/1002604/396x289/e3878aae1f/share-logo.png"/>
        <meta property="og:image:width" content="1080"/>
        <meta property="og:image:height" content="1080"/>
        <meta itemprop="name" content="Within Our Power"/>
        <meta itemprop="url" content="https://withinourpower.net"/>
        <meta itemprop="thumbnailUrl" content="https://a-us.storyblok.com/f/1002604/396x289/e3878aae1f/share-logo.png"/>
        <link rel="image_src" href="https://a-us.storyblok.com/f/1002604/396x289/e3878aae1f/share-logo.png" />
        <meta itemprop="image" content="https://a-us.storyblok.com/f/1002604/396x289/e3878aae1f/share-logo.png"/>
        <meta name="twitter:title" content="Within Our Power"/>
        <meta name="twitter:image" content="https://a-us.storyblok.com/f/1002604/396x289/e3878aae1f/share-logo.png"/>
        <meta name="twitter:url" content="https://withinourpower.net"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="description" content="a digital community that brings together women from all walks of life and backgrounds" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  let slug = 'home';

  let sbParams = {
    version: 'draft', // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
