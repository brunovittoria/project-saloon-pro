import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Button,
    Flex,
} from '@chakra-ui/react'

import { FiUser, FiScissors } from 'react-icons/fi'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { ScheduleItem } from '@/pages/dashboard' //Importamos a interface dentro do nosso Dashboard que contem os dados do agendamento

interface ModalInfoProps{
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    data: ScheduleItem
    finishService: () => Promise<void> //Como iremos comunicar com o backend pra finalizar o servico e isso pode demorar, tipamos Promise para que seja assincrona.

}

export function ModalInfo({ isOpen, onOpen, onClose, data, finishService}: ModalInfoProps){
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/> {/*Esse elemento é basicamente a sombra no fundoo do pc */}
            <ModalContent bg="barber.400">
                <ModalHeader>Avanti</ModalHeader>
                <ModalCloseButton/>

                <ModalBody>
                    <Flex align="center" mb={3}>
                        <Text>Teste modal</Text>
                    </Flex>

                </ModalBody>

            </ModalContent>
        </Modal>
    )
}