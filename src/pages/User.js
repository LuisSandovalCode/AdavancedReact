import React,{useContext} from 'react'
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton';
export const User = ()=> {
    const { RemoveAuth } = useContext(Context);

    return <React.Fragment>
        <h1>Usuario</h1>
        <SubmitButton onClick={RemoveAuth} >Cerrar Sesión</SubmitButton>
    </React.Fragment>
}