import { createContext, ReactNode, useState } from 'react'
import { destroyCookie, setCookie } from 'nookies' //Servira quando fizermos o logout, para destruir o cookies.
import Router from 'next/router'

import { api } from '../services/apiClient'

// Definindo a estrutura de dados para o contexto de autenticação
interface AuthContextData {
    user:   UserProps           // Dados do usuário autenticado
    isAuthenticated: boolean    // Indica se o usuário está autenticado ou não
    signIn: (credentials: SignInProps) => Promise<void>;
}

// Definindo a estrutura de dados para o usuário
interface UserProps {
    id: string
    name: string
    adress: string | null
    subscriptions?: SubscriptionProps | null     //O usuario pode vir com a sub null ou com um objeto de assinatura Colocamos o ponto de ? pois nao é obrigatorio o envio da sub em nosso codigo.
}

// Definindo a estrutura de dados para a assinatura
interface SubscriptionProps {           //Criamos um contrato separado para o Subscription pois dentro dele tem outras props
    id: string;
    status: string;
}

// Props necessárias para o provedor de autenticação que provem pra nossa aplicaçao GERAL
type AuthProviderProps = {
    children: ReactNode // Elementos filhos que serão envolvidos pelo provedor de autenticação
}

interface SignInProps {
    email: string
    password: string
}

// Criando o contexto de autenticação
export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    console.log("ERRO LOGOUT!")
    try{
        destroyCookie(null, '@saloon.token', { path: '/'})
        Router.push('/login')
    }catch(err){
        console.log("Error nel logout")
    }
}

// Componente do provedor de autenticação
export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<UserProps>()       // Estado para armazenar as informações do usuário
    const isAuthenticated = !!user                      //As !! converte o valor em BOOLEAN Se nao tiver informaçoes o isAuthenticated ira retornar falso, se tiver infos no user ira retornar TRUE.

    async function signIn({ email, password }: SignInProps){
        try{
            const response = await api.post("/session", {
                email,
                password
            })
            console.log(response.data)
            const { id, name, token, subscriptions, adress} = response.data //Fazemos o desconstructioring dos dados que queremos passar no cookies e na UseState

            setCookie(undefined, '@saloon.token', token, { //O SetCookie pede um contexto, porem como nao temos um ja que estamos no frontend, passamos como undefined. Como 2° param. passamos o token para dentro do cookie
                maxAge: 60 * 60 * 24 * 30,                //Tempo de expiraçao do cookie (Nesse caso de 1 mes)
                path: '/'                                 //Com o path setamos quais caminhos tem acesso ao nosso token, nesse caso damos acesso geral
            })

            setUser({                                    //Agora dentro da useState passamos as informaçoes para que elas fiquem armazenadas
                id,
                name,
                adress,
                subscriptions
            })

            api.defaults.headers.common['Authorization'] = `Bearer ${token}` //Agora passamos um HEADER do tipo TOKEN para nossa requisiçao a rota do backend, pra que o usuario possa injetar o token e logar
            
            Router.push('/dashboard')                                       //Uma vez que ele logou e o token foi salvo no header e COOKIES, vamos enviar o user pra tela de DASHBOARD

        } catch(err){
            console.log("Error on login", err)
        }
    }

    return(
        // Fornecendo o contexto de autenticação para os elementos filhos(Toda a nossa APLICACAO)
        <AuthContext.Provider value={{ user, isAuthenticated, signIn}}> 
            {children}
        </AuthContext.Provider>
    )
}

//EXPLICACAO DESTE FILE:

//Essencialmente, este arquivo define um contexto de autenticação (AuthContext) que fornece informações sobre o usuário autenticado e seu status de autenticação para os componentes filhos. Ele utiliza o useState do React para armazenar as informações do usuário e determina se o usuário está autenticado com base nessas informações.