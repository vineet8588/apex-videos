import React from 'react'
import {
    Box
  } from "@chakra-ui/react"
import { Header } from './header/Header'
import { Body } from './body/Body'


interface Props {
    
}

const Main = (props: Props) => {
    // return(<VideoPlayer url="https://v.redd.it/qio7391yes171"/>)
    // return(<Button variant="new">Hello </Button>)
    return (
        <Box justifyContent="center">
            <Header/>
            <Body/>
        </Box>
    )
}

export default Main
