import Head from "next/head";
import { Flex, Text } from '@chakra-ui/react'

import { canSSRAuth } from "../../utils/canSSRAuth";

export default function Dashboard(){
    return(
        <>
            <Head>
                <title>SaloonPRO - Mio Negozio</title>
            </Head>
            <Flex>
                <Text>Benvenuto al Dashboard</Text>
            </Flex>
        
        </>
    )
}

//Abaixo iremos proteger nossa rota com nosso canSSRAuth:
export const getServerSideProps = canSSRAuth(async (ctx) => {
    return{
        props: {
            
        }
    }
})