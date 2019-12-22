import React from 'react'
import { ListOfPhotoCards } from "../containers/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";
export const Home = ({ categoryid }) => (
    <React.Fragment>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryid} />
    </React.Fragment>
)