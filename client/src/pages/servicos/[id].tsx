import Head from "next/head";
import {
    Flex,
    Text,
    Heading,
    Button,
    useMediaQuery
} from '@chakra-ui/react'

import { Sidebar } from "../../components/sidebar";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

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

                        <Flex maxH="700px">

                        </Flex>
                    </Flex>

                </Flex>
            </Sidebar>
        </>
    )
}