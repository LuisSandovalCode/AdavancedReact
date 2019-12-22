import React from 'react'
import { ListOfPhotoCards } from "../containers/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";
import { Layout } from '../components/Layout';
const HomePage = ({ categoryid }) => (
    <Layout title="Tu red social de mascotas" subtitle="con petgram puedes encontrar fotos de animales domesticos muy bonitos" >
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryid} />
    </Layout>
)

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
  })