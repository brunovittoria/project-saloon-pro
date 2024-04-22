import { useState } from 'react'
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
import { canSSRAuth } from '../../utils/canSSRAuth'
import { setupAPIClient } from '../../services/api'


interface ServicesItem{
    id: string
    name: string
    price: number | string
    status: boolean
    user_id: string
}

interface ServicesProps{            //Dessa forma carregamos todas as informaçoes necessarios sobre os serviços dentro de um unico ARRAY
    services: ServicesItem[]
}

export default function Servicos({ services }: ServicesProps ){

    const [isMobile] = useMediaQuery("(max-width: 500px)")
    const [serviceList, setServiceList] = useState<ServicesItem[]>(services || [])        //Como estado inicial de nossa STATE passamos a lista de servicos com um GENERIC do TS

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

                        <Link href="/servicos/new">
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

                    {serviceList.map(services => (
                        <Link key={services.id} href={ `/servicos/${services.id}`} > {/*Essa propriedade serve pra quando queremos colocar um flex dentro do legacyBehavior */}
                            
                        <Flex cursor="pointer" w="100%" p={4} bg="barber.400" align={isMobile ? "flex-start" : "center"} direction={isMobile ? "column" : "row"} rounded="4" mb={2} justifyContent="space-between">
                            
                            <Flex mb={isMobile ? 2 : 0} direction="row" alignItems="center" justifyContent="center">
                                <IoMdPricetag size={28} color="#fba931"/>
                                    <Text fontWeight="bold" ml={4} color="white">
                                        {services.name}
                                    </Text>
                            </Flex>

                            <Text>
                            Prezzo: € {services.price}
                            </Text>

                        </Flex>
                        
                </Link>
                    ))}

                </Flex>

            </Sidebar>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {              

    try{

        const apiClient = setupAPIClient(ctx)
        const response = await apiClient.get("/services", { //Assim que renderizar a pagina iremos renderizar todos os servicos
            params:{
                status: true,
            }
        })                

        if(response.data === null){
            return{
                redirect:{
                    destination: '/dashboard',
                    permanent: false,
                }
            }
        }

        console.log("response lista:", response.data)

        
        return{
            props: {
                services: response.data
            }
        }
    }catch(err){
        console.log(err)
        
    }

})