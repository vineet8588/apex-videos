import { extendTheme, ThemeConfig, ThemeComponents} from "@chakra-ui/react"
import {mode} from '@chakra-ui/theme-tools'

const config : ThemeConfig = {
  initialColorMode: "dark"
}

const colors = {
  transparent: "transparent",
  accent: "#fd4d4d",
  bg_dark:"#151a21",
  bg_light:"#F7FAFC",
}

const styles = {
  global: (props:any) => ({
    body: {
      fontFamily: "body",
      color: mode("#1A202C", "#dee3ea")(props),
      bg: mode("white", "#0b0e11")(props),
      lineHeight: "base",
    },
  }),
}

//Add bg color !!
const components : ThemeComponents = {
  Button: {
    // default variant : solid
    variants: {
      "new" : props => ({
        color: "#fff",
        bg : "#fd4d4d",
        _hover: {
          bg: "#e2041e",
        },
      }),
    },
  },
};

const theme = extendTheme({ config , colors, styles, components })

export default theme

