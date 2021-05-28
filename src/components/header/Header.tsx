import { Box, Image, Center, Flex } from '@chakra-ui/react'
import React from 'react'
import logo from "./logo.svg"
import { ColorModeSwitcher } from '../../ColorModeSwitcher'

interface Props {
    
}

export const Header = (props: Props) => {
    return (
        <Flex justify={["center","center","space-between"]}>
            <Box minW="45px" display={["none","none","block"]}/>

            <Image src={logo}/>
            <Center display={["none","none","flex"]}>
                <ColorModeSwitcher mr="5px"/>
            </Center>
        </Flex>
    )
}
