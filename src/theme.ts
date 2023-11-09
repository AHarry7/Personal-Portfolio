// theme.ts
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'


const breakpoints = {
  base: "360px",
  sm: "480px",
  md: "768px",
  lg: "990px",
  xl: "1280px",
  "2xl": "1480px",
};

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}



// 3. Extend the theme with custom styles
const theme = extendTheme({
  breakpoints,
  config,
})

export default theme
