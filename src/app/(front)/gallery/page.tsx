import { Container, Heading, VStack } from '@chakra-ui/react';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Cafe DelSol/ Gallery",
  };

const Gallery = () => {
  return (
    <Container maxW={'3xl'} h={'100vh'} justifyContent={'center'} alignContent={'center'}>
        <VStack>
            <Heading color={'orange.400'} fontWeight={'600'}>
                COMING SOON!
            </Heading>
        </VStack>
    </Container>
  );
};

export default Gallery;
