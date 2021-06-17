import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Link,
    Flex,
    Box,
    Text
  } from "@chakra-ui/react"
import {FaArrowCircleRight} from 'react-icons/fa'
import {BsArrowLeft} from 'react-icons/bs'
import { VideoPlayer } from '../video-player/VideoPlayer'


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
            <ModalBody>
                <VideoPlayer url={props.data?.url}/>
                <Flex mt={4} direction={['column','row']} justifyContent="space-between">
                    <Box>
                        Video uploaded by respected user : u/{props.data?.author} <br/>
                        On the subreddit <Link color="accent" href="https://chakra-ui.com" isExternal>r/apexlegends</Link>.
                    </Box>
                    <Flex m={[1,2]} justifyContent="center">
                    <Link style={{textDecoration:'none'}} textDecor='none' href={props.data?.url} isExternal>
                        <Button p={[1,2,3]} variant="new" _focus={{outline:"none"}}> <Text fontSize={['10px','14px']} mr={[1,2]}>GO TO POST </Text> <FaArrowCircleRight/> </Button>
                    </Link>
                    </Flex>
                </Flex>
            </ModalBody>
            </ModalContent>
        </Modal>
    )
      
}

