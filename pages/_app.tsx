import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box width={'60vw'} margin={'100px auto 0'}>
        <Component {...pageProps} />
        </Box>
    </ChakraProvider>
  )
}
export default MyApp
