import Head from "next/head";
import { useState } from "react";

import { 
    Flex, 
    Text, 
    Heading, 
    Link as ChakraLink, 
    useMediaQuery,
    Button, 
    textDecoration} from '@chakra-ui/react'

import Link  from 'next/link'

import { canSSRAuth } from "../../utils/canSSRAuth";
import { Sidebar } from "../../components/sidebar";
import { IoMdPerson } from "react-icons/io";
import { setupAPIClient } from "../../services/api";

export interface ScheduleItem{
    id: string
    customer: string
    haircut: {
        id: string
        name: string
        price: string | number
        user_id: string
    }
}


interface DashboardProps{
    schedule: ScheduleItem[]
}

export default function Dashboard({ schedule }: DashboardProps ){ //Criamos uma interface para armazenar os dados do BE que recebemos via props em uma outra interface de array
    const [list, setList] = useState(schedule)

    const [isMobile] = useMediaQuery("(max-width: 500px)")

    return(
        <>
            <Head>
                <title>SaloonPRO - Mio Negozio</title>
            </Head>
            <Sidebar>
                <Flex direction="column" align="flex-start" justify="flex-start">

                    <Flex w="100%" direction="row" align="center" justify="flex-start">
                        <Heading fontSize="3XL" mt={4} mr={4}>
                            Benvenuto al Dashboard
                        </Heading>

                        <Link href="/new">
                            <Button>Registrare</Button>
                        </Link>
                    </Flex>

                    {list.map(item => ( //Fazendo o map do array que criamos na nossa interface de props
                        <ChakraLink key={item?.id} w="100%" m={0} p={0} mt={1} bg="transparent" style={{ textDecoration: "none" }} >
                            <Flex 
                                w="100%" 
                                direction={isMobile ? "column" : "row"} 
                                p={4} 
                                rounded={4} 
                                mb={2} 
                                bg="barber.400" 
                                justify="space-between" 
                                align={isMobile ? "flex-start" : "center"}
                                >

                                <Flex direction="row" mb={isMobile ? 2 : 0} align="center" justify="center">
                                    <IoMdPerson size={28} color="#f1f1f1"/>
                                    <Text fontWeight="bold" ml={4} noOfLines={1}>
                                        {item?.customer}
                                    </Text>
                                </Flex>

                                <Text fontWeight="bold" mb={isMobile ? 2 : 0}>
                                    {item?.haircut?.name}
                                </Text>
                                <Text fontWeight="bold" mb={isMobile ? 2 : 0}>
                                    € {item?.haircut?.price}
                                </Text>

                            </Flex>
                        </ChakraLink>
                    ))}

                </Flex>
            </Sidebar>
        
        </>
    )
}

//Abaixo iremos proteger nossa rota com nosso canSSRAuth:
export const getServerSideProps = canSSRAuth(async (ctx) => {

    try{
        const apiClient = setupAPIClient(ctx)
        const response = await apiClient.get('/schedule') //Iremos fazer o get dessa rota para listar os dados dos clientes em nosso dashboard

        return{
            props:{
                schedule: response.data,
            }
        }

    }catch(err){
        console.log(err)
        return{
            props:{
                schedule: []
            }
        }

    }
})