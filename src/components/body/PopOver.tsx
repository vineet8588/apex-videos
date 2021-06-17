import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Link,
    Flex,
    Box,
    Text
  } from "@chakra-ui/react"
import {FaArrowCircleRight} from 'react-icons/fa'
import {BsArrowLeft} from 'react-icons/bs'


interface dataObject{
    title: string,
    author: string,
    url: string
}
interface Props {
    onClose: any,
    isOpen: boolean,
    data: dataObject | undefined
}

export const PopOver = (props: Props) => {
    console.log(props.data)
    return (
        <Modal
            isCentered
            onClose={props.onClose}
            isOpen={props.isOpen}
            motionPreset="slideInBottom"
            size="3xl"
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                <Button _focus={{outline:"none"}} color="accent" onClick={props.onClose} variant="link"><BsArrowLeft/> Back</Button> <br/>
                {props.data?.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex justifyContent="space-between">
                <Box>
                    Video uploaded by respected user : u/{props.data?.author} <br/>
                    On the subreddit <Link color="accent" href="https://chakra-ui.com" isExternal>r/apexlegends</Link>.
                </Box>
                <Link style={{textDecoration:'none'}} textDecor='none' href={props.data?.url} isExternal>
                    <Button variant="new" _focus={{outline:"none"}}> <Text mr={2}>GO TO POST </Text> <FaArrowCircleRight/> </Button>
                </Link>
                </Flex>
            </ModalBody>
            </ModalContent>
        </Modal>
    )
      
}

