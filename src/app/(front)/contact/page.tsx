import { VStack, Heading, Container } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafe DelSol/ Contact",
};
const Contact = () => {
  return (
    <Container maxW={'3xl'} h={'100vh'} justifyContent={'center'} alignContent={'center'}>
        <VStack>
            <Heading color={'orange.400'} fontWeight={'600'}>
                COMING SOON!
            </Heading>
        </VStack>
    </Container>  )
}

export default Contact