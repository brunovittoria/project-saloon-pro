import Head from "next/head"
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react'
import Image from "next/image"
import Logo from '../../../public/images/logo.svg'
import Link from "next/link"

export default function Login(){
    return(
        <>
            <Head>
                <title>Saloon Pro - Il tuo sistema completo</title>   {/*Aqui usamos o titulo para melhorar nosso SEO*/}
            </Head>
            <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center"> {/*Aqui basicamente importamos uma DIV que ja vem com o display flex*/}
                
                <Flex width={640} direction="column" p={14} rounded={8}>
                    <Center p={4}>
                        <Image
                            width={240}
                            src={Logo}
                            quality={100}
                            objectFit="fill"
                            alt="Logo Saloon PRO"
                        />
                    </Center>

                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder="email@email.com"
                        type="email"
                        mb={3}
                    />

                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder="**********"
                        type="password"
                        mb={6}
                    />

                    <Button
                        background="button.cta"  //Esse button.cta pegamos do nosso theme
                        mb={6}
                        color="gray.100"
                        _hover={{ bg: "#ffb13e"}}
                    >
                        Accedere
                    </Button>

                    <Center mt={2}>
                        <Link href="/register">
                            <Text cursor="pointer" color="#FFF">Non sei ancora registrato? <strong>Registrati</strong></Text>
                        </Link>
                    </Center>
                </Flex>

            </Flex>
        </>
    )
}