import Head from 'next/head'
import Link from 'next/link'
import { Sidebar } from '../../components/sidebar'
import {
    Flex,
    Text,
    Heading,
    Button,
    Stack,
    Switch,
    useMediaQuery
} from '@chakra-ui/react'

import { IoMdPricetag } from 'react-icons/io'

export default function Servicos(){

    const [isMobile] = useMediaQuery("(max-width: 500px)")
    return(
        <>
            <Head>
                <title>Miei Servizi - Mio Saloon</title>
            </Head>
            <Sidebar>
                <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

                    <Flex direction={isMobile ? "column" : "row"} w="100%" alignItems={isMobile ? "flex-start" : "center"} justifyContent="flex-start" mb={0}>
                        <Heading fontSize={isMobile ? "28px" : "3xl"} mt={4} mb={4} mr={4} color="orange.900">
                            Miei Servizi
                        </Heading>

                        <Link href="/services/new">
                            <Button>
                                Crea Nuovo
                            </Button>
                        </Link>

                        <Stack ml="auto" align="center" direction="row">
                            <Text>ATTIVI</Text>
                            <Switch
                                colorScheme="green"
                                size="lg"
                            />
                        </Stack>

                    </Flex>

                    <Link href="/haircuts/123" > {/*Essa propriedade serve pra quando queremos colocar um flex dentro do legacyBehavior */}
                            
                            <Flex cursor="pointer" w="100%" p={4} bg="barber.400" align={isMobile ? "flex-start" : "center"} direction={isMobile ? "column" : "row"} rounded="4" mb={2} justifyContent="space-between">
                                
                                <Flex mb={isMobile ? 2 : 0} direction="row" alignItems="center" justifyContent="center">
                                    <IoMdPricetag size={28} color="#fba931"/>
                                        <Text fontWeight="bold" ml={4} color="white">
                                            Taglio Uomo
                                        </Text>
                                </Flex>

                                <Text>
                                Prezzo: €20.00
                                </Text>

                            </Flex>
                            
                    </Link>

                </Flex>

            </Sidebar>
        </>
    )
}