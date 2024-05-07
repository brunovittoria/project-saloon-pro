import Head from "next/head";
import {
    Flex,
    Text,
    Heading,
    Button,
    useMediaQuery,
    Input,
    Stack,
    Switch
} from '@chakra-ui/react'

import { Sidebar } from "../../components/sidebar";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import { setupAPIClient } from "../../services/api";

import { canSSRAuth } from '../../utils/canSSRAuth'

export default function EditHaircut(){
    const [isMobile] = useMediaQuery("(max-width: 500px)")

    return(
        <>
            <Head>
                <title>Modificando servizio - SaloonPRO</title>
            </Head>
            <Sidebar>
                <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

                    <Flex 
                        direction={isMobile ? "column" : "row"} 
                        w="100%" 
                        alignItems={isMobile ? "flex-start" : "center"} 
                        justifyContent="flex-start" 
                        mb={isMobile ? 4 : 0}
                    >
                        <Link href="/servicos">
                            <Button mr={3} p={4} display="flex" alignItems="center" justifyContent="center">
                                <FiChevronLeft size={24} color="#FFF"/>
                                Torna
                            </Button>
                        </Link>

                        <Heading fontSize={isMobile ? "22px" : "3xl"} color="white">
                            Modifica
                        </Heading>
                    </Flex>

                    <Flex mt={4} maxH="700px" pt={8} pb={8} w="100%" bg="barber.400" direction="column" align="center" justify="center">
                        <Heading fontSize={isMobile ? "22px" : "3xl"}>Modifica Servizio</Heading>

                        <Flex w="85%" direction="column">
                            <Input
                                placeholder="Nome del Servizio"
                                bg="gray.900"
                                mb={3}
                                size="lg"
                                type="text"
                                mt={4}
                                w="100%"
                            />

                            <Input
                                placeholder="Prezzo del tuo servizio ex: 45.70"
                                bg="gray.900"
                                mb={3}
                                size="lg"
                                type="text"
                                w="100%"
                            />

                            <Stack mb={6} align="center" direction="row">
                                <Text fontWeight="bold">Disattivare Servizio</Text>
                                <Switch
                                    size="lg"
                                    colorScheme="red"
                                />
                            </Stack>

                            <Button mb={6} w="100%" bg="button.cta" color="gray.900" _hover={{ bg: "#FFB13e"}}>
                                Salva
                            </Button>
                        </Flex>
                    </Flex>

                </Flex>
            </Sidebar>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const { id } = ctx.params

    try{
        const apiClient = setupAPIClient(ctx)

        const check = await apiClient.get('/service/check') //Rota responsavel por verificar se o user tem subcription

        const response = await apiClient.get('/service/detail', {
            params: {
                work_id: id
            }
        })

        return{
            props:{
                service: response.data  //Iremos retornar o response data na prop service
            }
        }

    }catch(err){
        console.log(err)

        return{
            redirect:{
                destination: "/servicos",
                permanent: false,
            }
        }
    }
})