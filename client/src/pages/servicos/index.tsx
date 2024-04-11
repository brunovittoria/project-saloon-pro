import Head from 'next/head'
import Link from 'next/link'
import { Sidebar } from '../../components/sidebar'
import {
    Flex,
    Text,
    Heading,
    Button,
    Stack,
    Switch
} from '@chakra-ui/react'

export default function Servicos(){

    return(
        <>
            <Head>
                <title>Miei Servizi - Mio Saloon</title>
            </Head>
            <Sidebar>
                <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

                    <Flex direction="row" w="100%" alignItems="center" justifyContent="flex-start" mb={0}>
                        <Heading fontSize="3xl" mt={4} mb={4} mr={4} color="orange.900">
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

                </Flex>

            </Sidebar>
        </>
    )
}