import Head from 'next/head'
import {
    Flex,
    Text,
    Heading,
    Box,
    Input
} from '@chakra-ui/react'
import { Sidebar } from '../../components/sidebar'

export default function Profile(){
    return(
        <>
            <Head>
                <title>Mio Account - SaloonPRO </title>
            </Head>
            <Sidebar>
                <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

                    <Flex w="100%" direction="row" alignItems="center" justifyContent="flex-start">
                        <Heading fontSize="3x1" mt={4} mb={4} mr={4} color="orange.900">Mio Account</Heading>
                    </Flex>

                    <Flex pt={8} pb={8} background="barber.400" maxH="700px" w="100%" direction="column" alignItems="center" justifyContent="center">

                        <Flex direction="column" w="85%">
                            <Text mb={2} fontSize="xl" fontWeight="bold" color="white">Nome del tuo saloon:</Text>
                            <Input
                                w="100%"
                                background="gray.900"
                                placeholder="Nome del tuo saloon:"
                                size="lg"
                                type="text"
                                mb={3}
                            />

                            <Text mb={2} fontSize="xl" fontWeight="bold" color="white">Indirizzo del tuo saloon:</Text>
                            <Input
                                w="100%"
                                background="gray.900"
                                placeholder="Indirizzo del tuo saloon"
                                size="lg"
                                type="text"
                                mb={3}
                            />
                        </Flex>

                    </Flex>

                </Flex>
            </Sidebar>
        </>
    )
}