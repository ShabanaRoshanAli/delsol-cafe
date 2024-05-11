'use client'

import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image,
    chakra
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Logo = (props: any) => {
    return (
        <Image src='/logo-header.png' alt='logo' w={12} h={12} />
    )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.700', 'gray.900')}
            color={'white'}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <ListHeader>Locations & Hours</ListHeader>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={24} px={5}>
                    {/* col 1  */}
                    <Stack align={'flex-start'}>
                        <Box as="a" href={'#'} color={'gray.500'}>
                            Chambersburg, PA
                            <Text fontSize='xs' color={'orange.400'}>
                                438 Gateway Avenue Chambersburg, PA 17201 <br />
                                <chakra.strong color={'white'}> Call</chakra.strong> (717) 261-1805 / Pick-Up / Delivery
                                <br /><chakra.strong color={'white'}> Mon-Thu: 11am-9pm / Fri-Sat: 11am-10pm
                                    Sun: 11am-8pm</chakra.strong>
                            </Text>
                        </Box>
                        <Stack direction={'row'} align={'center'} spacing={2}>
                            <Box as="a" href={'#'} color={'gray.500'}>
                                Hagerstown, MD - Salem Ave
                                <Text fontSize='xs' color={'orange.400'}>
                                    1130 Conrad Ct., Hagerstown, MD 21740<br />
                                    <chakra.strong color={'white'}> Call </chakra.strong>(240) 707-6276 / Order Online
                                    <br /><chakra.strong color={'white'}> Mon-Thu: 11am-9pm / Fri-Sat: 11am-10pm
                                        Sun: 11am-8pm</chakra.strong>
                                </Text>
                            </Box>
                        </Stack>
                        <Box as="a" href={'#'} color={'gray.500'}>
                            Hagerstown East, MD - Eastern Blvd
                            <Text fontSize='xs' color={'orange.400'}>
                                1481 Salem Avenue Hagerstown, MD 21740<br />
                                <chakra.strong color={'white'}> Call </chakra.strong>(301) 739-3072 / Order Online
                                <br /><chakra.strong color={'white'}> Mon-Thu: 11am-9pm / Fri-Sat: 11am-10pm
                                    Sun: 11am-8pm</chakra.strong>
                            </Text>
                        </Box>
                    </Stack>
                    {/* col 2  */}
                    <Stack align={'flex-start'}>
                        <Box as="a" href={'#'} color={'gray.500'}>
                            Martinsburg, WV
                            <Text fontSize='xs' color={'orange.400'}>
                                796 Foxcroft Avenue Martinsburg, WV 25401<br />
                                <chakra.strong color={'white'}> Call </chakra.strong>(681) 260-2200 / Order Online
                                <br /><chakra.strong color={'white'}> Mon-Thu: 11am-9pm / Fri-Sat: 11am-10pm
                                    Sun: 11am-8pm</chakra.strong>
                            </Text>
                        </Box>
                        <Box as="a" href={'#'} color={'gray.500'}>
                            Waynesboro, PA
                            <Text fontSize='xs' color={'orange.400'}>
                                11119 Buchanan Trail East, Waynesboro, PA 17268<br />
                                <chakra.strong color={'white'}> Call </chakra.strong>(717) 762-1477 / Order Online
                                <br /><chakra.strong color={'white'}> Mon-Thu: 11am-9pm / Fri-Sat: 11am-10pm
                                    Sun: 11am-8pm</chakra.strong>
                            </Text>
                        </Box>
                    </Stack>
                    {/* col 3  */}
                    <Stack align={'flex-start'}>
                        <Box as="a" href={'#'} color={'gray.500'}>
                            Winchester, VA
                            <Text fontSize='xs' color={'orange.400'}>
                                50 Featherbed Lane, Winchester, VA 22601<br />
                                <chakra.strong color={'white'}> Call </chakra.strong>(540) 535-2275 / Order Online
                                <br /><chakra.strong color={'white'}> Mon-Thu: 11am-9pm / Fri-Sat: 11am-10pm
                                    Sun: 11am-8pm</chakra.strong>
                            </Text>
                        </Box>
                        <Box as="a" href={'#'} color={'gray.500'}>
                            Greencastle, PA
                            <Text color={'white'} fontSize={'sm'}>COMING SOON!</Text>
                        </Box>
                        <Flex>
                            <Box as='a' href='https://www.facebook.com/delsolcafes' target='-blank'>
                                <FaFacebookSquare className='w-8 h-8 text-blue-900' />
                            </Box>
                            <Box as='a' href='https://www.instagram.com/cafedelsolmartinsburg/' target='-blank'>
                                <FaInstagramSquare className='w-8 h-8 text-gray-400' />
                            </Box>
                        </Flex>

                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10} bg={useColorModeValue('gray.500', 'gray.900')}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Logo />
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © Copyright 2024 Café Del Sol
                </Text>
            </Box>
        </Box>
    )
}