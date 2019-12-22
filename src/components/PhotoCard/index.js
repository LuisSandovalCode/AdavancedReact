import React from "react";
import { ImagenWrapper, Image,Article } from "./Style";
import { Link } from '@reach/router'
import { useNearScreen } from "../hooks/useNearScreen";
import { FavButton } from '../FavButton';
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';
export const PhotoCard = ({ id, liked ,likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImagenWrapper>
              <Image src={src} />
            </ImagenWrapper>
          </Link>
          <ToggleLikeMutation>
          {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: {
                    input: { id }
                  }})
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </React.Fragment>
      )}
    </Article>
  );
};
