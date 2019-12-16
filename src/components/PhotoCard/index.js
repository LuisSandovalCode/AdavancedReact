import React, { useEffect, useRef, useState } from "react";
import { ImagenWrapper, Image, Button, Article } from "./Style";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  const Key = `like-${id}`;
  const [liked, setLiked] = useState(() => {
    try {
      const likeStorage = window.localStorage.getItem(Key);
      return likeStorage;
    } catch (e) {
      return false;
    }
  });

  console.log(liked);
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver != "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [useEffect]);
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(Key, value);
      setLiked(value);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <a href={`/detail/${id}`}>
            <ImagenWrapper>
              <Image src={src} />
            </ImagenWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="32px" /> {likes} Likes!!
          </Button>
        </React.Fragment>
      )}
    </Article>
  );
};
