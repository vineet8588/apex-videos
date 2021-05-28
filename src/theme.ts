import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import {mode} from '@chakra-ui/theme-tools'

const config : ThemeConfig = {
  initialColorMode: "dark"
}

const styles = {
  global: (props:any) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "#dee3ea")(props),
      bg: mode("white", "#0b0e11")(props),
      lineHeight: "base",
    },
  }),
}

const theme = extendTheme({ config , styles })

export default theme

