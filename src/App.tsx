import * as React from "react"
import {ChakraProvider} from "@chakra-ui/react"

import theme from "./theme"
import Main from "./components/Main"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Main/>
  </ChakraProvider>
)
