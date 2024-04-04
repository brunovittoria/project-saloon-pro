import { ReactNode } from "react";
import { 
    IconButton, 
    Box, 
    CloseButton, 
    Flex, 
    Icon, 
    Drawer, 
    DrawerContent, 
    useColorModeValue, 
    Text, 
    useDisclosure, 
    BoxProps, 
    FlexProps 
} from "@chakra-ui/react";

import { 
    FiScissors, 
    FiClipboard, 
    FiSettings, 
    FiMenu
} from "react-icons/fi"

import { IconType } from "react-icons";
import Link from "next/link";


interface LinkItemProps{
    name: string;
    icon: IconType;
    route: string;
}

//Iremos construir os itens da nossa NAVBAR primeiramente em um array para depois passarmos de fato em nossa NAVBAR

const LinkItems: Array<LinkItemProps> = [   //Definimos o tipo Array para nosso array e passamos a nossa tipagem do array via nossa interface
    { name: "Agenda", icon: FiScissors, route: "/dashboard"},
    { name: "Servizi", icon: FiClipboard, route: "/services"},
    { name: "Mio Account", icon: FiSettings, route: "/profile"},
]

interface SidebarProps extends BoxProps{        //Nos tratamos nossa SIDEBAR como uma modal e passamos a prop de onClose para ela
    onClose: () => void
}

interface NavItemProps extends FlexProps{
    icon: IconType;
    children: ReactNode;
    route: string;
}

//Abaixo criamos um bloco de codigo que tem a formataçao de todos os itens do nosso Nav, assim basta pegarmos esse NavItem e jogar lo pra dentro do nosso sidebarContent
const NavItem = ({icon, children, route, ...rest} : NavItemProps) => {
    return(
        <Link href={route} style={{ textDecoration: 'none' }}>
        <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
                bg: "barber.900",
                color: "white"
            }}
            {...rest}
        >

            {icon && (
                <Icon
                    mr={4}
                    fontSize="16"
                    as={icon}
                    _groupHover={{
                        color: "white"
                    }}
                />
            )}

        </Flex>
    </Link>
    )
}

const SidebarContent = ({onClose, ...rest} : SidebarProps) => {
    return(
        <Box
            bg="barber.400"
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            position="fixed"
            height="full"
            {...rest}   //Passamos todas as props do BoxProps
        >

            <Flex height="20" alignItems="center" justifyContent="space-between" mx="8">
                <Link href="/dashboard">
                    <Flex cursor="pointer" userSelect="none" flexDirection="row">
                        <Text fontSize="2x1" fontFamily="monospace" fontWeight="bold">Saloon</Text>
                        <Text fontSize="2x1" fontFamily="monospace" fontWeight="bold" color="button.cta">PRO</Text>
                    </Flex>
                </Link>
                <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose}/>
            </Flex>

            {LinkItems.map(link => (
                <NavItem icon={link.icon} route={link.route} key={link.name}>
                    {link.name}
                </NavItem>
            ))}


        </Box>
    )
}

export function Sidebar({ children }: { children: ReactNode }){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Box minH="100vh" bg="barber.900">
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block"}}
            />

            <Box>
                {children} {/*Aqui basicamente sao nossas rotas onde iremos usar o NAVBAR */}
            </Box>
        </Box>
    )
}
