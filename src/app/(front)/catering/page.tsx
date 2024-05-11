import { Heading, Container, VStack } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafe DelSol/ Catering",
};

const Catering = () => {
  return (    
    <Container maxW={'3xl'} h={'100vh'} justifyContent={'center'} alignContent={'center'}>
        <VStack>
            <Heading color={'orange.400'} fontWeight={'600'}>Coming Soon!</Heading>
        </VStack>
    </Container>
  )
}

export default Catering