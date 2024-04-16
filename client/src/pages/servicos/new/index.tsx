import Head from 'next/head'
import { Sidebar } from '../../../components/sidebar'
import { FiChevronLeft} from 'react-icons/fi'
import { canSSRAuth } from '../../../utils/canSSRAuth'

import {
    Flex,
    Text,
    Heading,
    Button,
    useMediaQuery,
    Input
} from '@chakra-ui/react'

import Link from 'next/link'

import { setupAPIClient } from '../../../services/api'

export default function NewService(){
    const [isMobile] = useMediaQuery("(max-width: 500px)")

    return(
        <>
            <Head>
                <title>SaloonPRO - Nuovo Servizio</title>
            </Head>
            <Sidebar>
                <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

                    <Flex mb={isMobile ? 4 : 0} direction={isMobile ? "column" : "row"} w="100%" align={isMobile ? "flex-start" : "center"}>
                        <Link href="/servicos">
                            <Button color="#FFF" bg="barber.400" p={4} display="flex" alignItems="center" justifyItems="center" mr={4}>
                                <FiChevronLeft size={24} color="#FFF"/>
                                Torna
                            </Button>
                        </Link>

                        <Heading color="orange.900" mt={4} mb={4} mr={4} fontSize={isMobile ? "28px" : "3xl"}>Servizi</Heading>
                    </Flex>

                    <Flex direction="column" maxH="700px" bg="barber.400" w="100%" align="center" justify="center" pt={8} pb={8}>
                        <Heading mb={4} fontSize={isMobile ? "28px" : "3xl"}>
                            Registra Servizio
                        </Heading>
                        <Input 
                            placeholder="Nome del servizio"
                            size="lg"
                            type="text"
                            w="85%"
                            bg="gray.900"
                            mb={3}
                        />

                        <Input 
                            placeholder="Prezzo"
                            size="lg"
                            type="text"
                            w="85%"
                            bg="gray.900"
                            mb={4}
                        />

                        <Button w="85%" size="lg" color="gray.900" mb={6} bg="button.cta" _hover={{ bg:  "#FFb13e"}}>
                            Cadastrar
                        </Button>
                    </Flex>

                </Flex>
            </Sidebar>
        </>
    )
}
