import React from "react";
import { Link, Image } from "./style";
const DEFAUL_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAUL_IMAGE, path, emoji = "?" }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
);
