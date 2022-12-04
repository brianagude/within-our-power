import '../styles/globals.scss'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Config from '../components/Config';
import Page from '../components/Page';
import Grid from '../components/Grid';
import Teaser from '../components/Teaser';
import Feature from '../components/Feature';
import HeaderMenu from '../components/HeaderMenu';
import MenuLink from '../components/MenuLink';
import TextBlock from '../components/TextBlock';
import ImageCarousel from '../components/ImageCarousel';
import Section from '../components/Section';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/AccordionItem';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import BlogCarousel from '../components/BlogCarousel';
import BlogItem from '../components/BlogItem';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  config: Config,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  text_block: TextBlock,
  image_carousel: ImageCarousel,
  section: Section,
  button: Button,
  accordion: Accordion,
  accordion_item: AccordionItem,
  form: Form,
  form_input: FormInput,
  blog_carousel: BlogCarousel,
  blog_item: BlogItem
};

 storyblokInit({
  accessToken: "7o6dB1MSujP0zVXsDUdzqgtt",
  use: [apiPlugin],
  apiOptions: { region: "us" },
  components
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
