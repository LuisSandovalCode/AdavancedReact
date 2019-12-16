import React, { useEffect, useRef, useState } from "react";
import { ImagenWrapper, Image, Button, Article } from "./Style";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNearScreen } from "../hooks/useNearScreen";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const Key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(Key, false);
  console.log(liked);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <a href={`/detail/${id}`}>
            <ImagenWrapper>
              <Image src={src} />
            </ImagenWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" /> {likes} Likes!!
          </Button>
        </React.Fragment>
      )}
    </Article>
  );
};
