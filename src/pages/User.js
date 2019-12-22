import React,{useContext} from 'react'
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton';
import { Layout } from '../components/Layout';
export default ()=> {
    const { RemoveAuth } = useContext(Context);

    return <Layout title="Usuario">
        <SubmitButton onClick={RemoveAuth} >Cerrar Sesión</SubmitButton>
    </Layout>
}