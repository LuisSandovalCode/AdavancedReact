import React, { useEffect, useRef, useState } from "react";
import { ImagenWrapper, Image, Button, Article } from "./Style";
import { MdFavoriteBorder } from "react-icons/md";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        console.log("si");
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [useEffect]);

  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <a href={`/detail/${id}`}>
            <ImagenWrapper>
              <Image src={src} />
            </ImagenWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" /> {likes} Likes!!
          </Button>
        </React.Fragment>
      )}
    </Article>
  );
};
