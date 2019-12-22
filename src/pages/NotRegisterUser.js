import React,{ useContext } from 'react'
import {Context} from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';
import { Layout } from '../components/Layout';



export const NotRegisterUser = ()=>{
    const { ActiveteAuth } = useContext(Context);
    return (
              <Layout title="Registro Usuario e Inicio de Sesión" subtitle="Registro de nuevos usuarios e inicio de sisión para los nuevos">
                    <RegisterMutation>
                        {
                            (register,{ data,error,loading }) => {
                                const onSubmit = ({ email, password }) =>{
                                    const input = {email,password};
                                    const variables = { input };
                                    register({variables}).then(({ data })=>{
                                        const { signup } = data;
                                        ActiveteAuth(signup);
                                    });
                                }

                                const errorMsg = error && "El usuario ya existe, o ocurrió un error";

                                return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Registrarse" />
                            }
                        }
                    </RegisterMutation>
                    <LoginMutation>
                        {
                            (login,{ data,error,loading }) =>{
                                const onSubmit = ({ email, password }) =>{
                                    const input = {email,password};
                                    const variables = { input };
                                    login({variables}).then(({ data }) => {
                                        const { login } = data;
                                        ActiveteAuth(login);
                                    });
                                }

                                const errorMsg = error && "La contraseña no es correcta o el usuario no existe";
                                return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Iniciar Sesión" />
                            }
                        }
                    </LoginMutation>
                </Layout>
    )
}