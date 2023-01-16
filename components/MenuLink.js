import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({blok}) => (
  <Link href={blok.link.cached_url} {...storyblokEditable(blok)}>
    <a>
      {blok.text}
    </a>
  </Link>
)

export default MenuLink