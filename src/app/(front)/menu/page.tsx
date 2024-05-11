import Card_one from '@/app/components/Card_one';
import { menuArr } from '@/data';
import { Box, Text, Center, Container } from '@chakra-ui/react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Cafe DelSol/ Menu",
};

const Menu = () => {
    return (
        <Container maxW={'6xl'} mx={'auto'} >
            <Center>
                <Box as='div' mx={'auto'}>
                    <Link href={'/'}>Home</Link>
                    <Text fontSize='4xl' color={'orange.400'} fontWeight={700}>MENU</Text>
                    <Card_one />
                </Box>
            </Center>
        </Container>
    );
}

export default Menu;
