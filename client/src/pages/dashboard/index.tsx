import Head from "next/head";
import { Flex, Text } from '@chakra-ui/react'

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