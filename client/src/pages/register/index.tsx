import Head from "next/head"
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react'
import Image from "next/image"
import Logo from '../../../public/images/logo.svg'
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Register(){

    const [email, setEmail]       = useState('')
    const [password, setPassword] = useState('')
    const [company, setCompany]   = useState('')

    function handleRegister(){
        console.log(email)
        console.log(password)
        console.log(company)
    }

    return(
        <>
            <Head>
                <title>SaloonPRO - Crea il tuo account in SaloonPRO</title>   {/*Aqui usamos o titulo para melhorar nosso SEO*/}
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
                        placeholder="Nome del tuo saloon"
                        type="text"
                        mb={3}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />

                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder="email@email.com"
                        type="email"
                        mb={3}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder="**********"
                        type="password"
                        mb={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        background="button.cta"  //Esse button.cta pegamos do nosso theme
                        mb={6}
                        color="gray.100"
                        _hover={{ bg: "#ffb13e"}}
                        onClick={handleRegister}
                    >
                        Registrati
                    </Button>

                    <Center mt={2}>
                        <Link href="/login">
                            <Text cursor="pointer" color="#FFF">Sei già registrato? <strong>Accedi</strong></Text>
                        </Link>
                    </Center>
                </Flex>

            </Flex>
        </>
    )
}