import Head from "next/head"
import { Flex, Text } from '@chakra-ui/react'

export default function Home(){
  return(
    <>
      <Head>
        <title>Saloon Pro - Il tuo sistema completo</title>   {/*Aqui usamos o titulo para melhorar nosso SEO*/}
      </Head>
      <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center"> {/*Aqui basicamente importamos uma DIV que ja vem com o display flex*/}
        <Text fontSize={30}>Pagina HOME</Text>
      </Flex>
    </>
  )
}