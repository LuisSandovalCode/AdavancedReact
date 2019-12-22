import React from 'react'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button} from "./Styles";
export const FavButton = ({liked, likes, onClick}) => {
    
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return(
        <React.Fragment>
            <Button onClick={onClick}>
                <Icon size="32px" /> {likes} Likes!!
            </Button>
        </React.Fragment>
    );
}

