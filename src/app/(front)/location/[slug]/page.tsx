import { VStack, Heading, Container } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cafe DelSol/ Location",
  };

  
type ParamsProps = { params: { slug: string } }
const Location = ({params}:ParamsProps) => {

  const slug = params.slug.toUpperCase()
  return (    
    <Container maxW={'3xl'} h={'100vh'} justifyContent={'center'} alignContent={'center'}>
        <VStack>
            <Heading color={'orange.400'} fontWeight={'600'}>({slug}) COMMING SOON!</Heading>
        </VStack>
    </Container>
  )
}

export default Location