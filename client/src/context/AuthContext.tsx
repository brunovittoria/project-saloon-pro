import { createContext, ReactNode, useState } from 'react'

// Definindo a estrutura de dados para o contexto de autenticação
interface AuthContextData {
    user:   UserProps           // Dados do usuário autenticado
    isAuthenticated: boolean    // Indica se o usuário está autenticado ou não
}

// Definindo a estrutura de dados para o usuário
interface UserProps {
    id: string
    name: string
    addres: string | null
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

interface SigninProps {
    email: string
    password: string
}

// Criando o contexto de autenticação
export const AuthContext = createContext({} as AuthContextData)

// Componente do provedor de autenticação
export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<UserProps>()       // Estado para armazenar as informações do usuário
    const isAuthenticated = !!user                      //As !! converte o valor em BOOLEAN Se nao tiver informaçoes o isAuthenticated ira retornar falso, se tiver infos no user ira retornar TRUE.

    return(
        // Fornecendo o contexto de autenticação para os elementos filhos(Toda a nossa APLICACAO)
        <AuthContext.Provider value={{ user, isAuthenticated}}> 
            {children}
        </AuthContext.Provider>
    )
}

//EXPLICACAO DESTE FILE:

//Essencialmente, este arquivo define um contexto de autenticação (AuthContext) que fornece informações sobre o usuário autenticado e seu status de autenticação para os componentes filhos. Ele utiliza o useState do React para armazenar as informações do usuário e determina se o usuário está autenticado com base nessas informações.